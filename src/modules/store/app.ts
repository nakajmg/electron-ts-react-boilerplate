import { createSlice } from "@reduxjs/toolkit"

type AppState = {
  hasFetched: boolean
}

const initialState: AppState = {
  hasFetched: false,
}

export default createSlice({
  name: "app",
  initialState,
  reducers: {},
})
