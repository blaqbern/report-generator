'use strict'

const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow = null
app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
  })

  mainWindow.loadURL(`file://${__dirname}/public/index.html`)
  if (process.env.NODE_ENV === 'development') {
    mainWindow.webContents.openDevTools()
  }

  mainWindow.on('closed', () => mainWindow = null)
})
