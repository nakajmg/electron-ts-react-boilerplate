import { createSlice } from "@reduxjs/toolkit"
import ELECTRON_STORE_KEYS from "../../constants/electronStoreKeys"
import electronStore from "../electronStore"
import { PreferenceStore } from "../../models/store"

const initialState: PreferenceStore = electronStore.get(
  ELECTRON_STORE_KEYS.PREFERENCE
)

window.$electronStore = electronStore

export default createSlice({
  name: "preference",
  initialState,
  reducers: {},
})
