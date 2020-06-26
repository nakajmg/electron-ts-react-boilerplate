import { app, BrowserWindow, ipcMain } from "electron"
import * as path from "path"
import * as url from "url"
import EVENT_NAMES from "../constants/eventNames"

ipcMain.on(EVENT_NAMES.UPDATE_PREFERENCE, () => {
  appWindow?.webContents.send(EVENT_NAMES.UPDATE_PREFERENCE)
})

let appWindow: BrowserWindow | null

const createWindow = async () => {
  // if (process.env.NODE_ENV !== 'production') {
  //     await installExtensions();
  // }

  appWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  })

  if (process.env.NODE_ENV !== "production") {
    process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = "1" // eslint-disable-line require-atomic-updates
    appWindow.loadURL(`http://localhost:2003`)
  } else {
    appWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, "index.html"),
        protocol: "file:",
        slashes: true,
      })
    )
  }

  if (process.env.NODE_ENV !== "production") {
    // Open DevTools, see https://github.com/electron/electron/issues/12438 for why we wait for dom-ready
    appWindow.webContents.once("dom-ready", () => {
      appWindow!.webContents.openDevTools()
    })
  }

  appWindow.on("closed", () => {
    appWindow = null
  })
}

app.on("ready", createWindow)

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit()
  }
})

app.on("activate", () => {
  if (appWindow === null) {
    createWindow()
  }
})
