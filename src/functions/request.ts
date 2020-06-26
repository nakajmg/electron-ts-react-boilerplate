import axios, { AxiosRequestConfig, CancelToken } from "axios"
import { promiseStatus } from "promise-status-async"
import { PreferenceStore } from "../models/store"

const AUTHORIZATION_HEADER = "x-cybozu-authorization"

const baseUrl = (subDomain?: string, isSecureAccess = false) => {
  return `https://${subDomain}${isSecureAccess ? ".s" : ""}.cybozu.com`
}

interface RequestConfig extends AxiosRequestConfig {
  path?: string
}

const requestQueue = new Map()
let isSecureAccess = false

const request = async (config: RequestConfig, preference: PreferenceStore) => {
  const cancelSource = axios.CancelToken.source()

  const url = `${baseUrl(preference.subDomain, isSecureAccess)}${config.path}`
  const _config: AxiosRequestConfig = {
    method: "GET",
    url,
    ...config,
    cancelToken: cancelSource.token,
    headers: {
      ...config.headers,
      [AUTHORIZATION_HEADER]: btoa(`${preference.id}:${preference.pass}`),
    },
  }

  const prevQueue = requestQueue.get(url)
  if (
    prevQueue?.promise &&
    (await promiseStatus(prevQueue.promise)) === "pending"
  ) {
    prevQueue.cancelSource?.cancel()
  }
  const promise = axios(_config)
    .then((res) => res.data)
    .catch((err) => {
      if (axios.isCancel(err)) {
        return new Error("Request canceled")
      }
      // s.でリトライ
      if (err.response.status === 403) {
        isSecureAccess = !isSecureAccess
        return axios({
          ..._config,
          url: `${baseUrl(preference.subDomain, isSecureAccess)}${config.path}`,
          cancelToken: cancelSource.token,
        })
          .then((res) => res.data)
          .catch((err) => {
            if (axios.isCancel(err)) {
              return new Error("Request canceled")
            }
            return err
          })
      }
    })

  // キャンセル対象
  // if (config.path === "") {
  //   requestQueue.set(url, {
  //     promise,
  //     cancelSource
  //   })
  // }
  return promise
}

export default request
