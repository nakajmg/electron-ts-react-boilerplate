import {
  getDefaultMiddleware,
  configureStore,
  combineReducers,
} from "@reduxjs/toolkit"
import app from "./app"
import preference from "./preference"
const rootReducer = combineReducers({
  app: app.reducer,
  preference: preference.reducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default function setupStore() {
  const middleware = getDefaultMiddleware()
  return configureStore({
    reducer: rootReducer,
    middleware,
  })
}
