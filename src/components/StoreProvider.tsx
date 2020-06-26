import React from "react"
import setupStore from "../modules/store"
import { Provider } from "react-redux"

export const store = setupStore()
window.$store = store

export const StoreProvider: React.FC = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}
