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

  // Since this is an Electron app, the browser will not be adding an Origin
  // header to any requests. So we add it here manually to all requests from the
  // app.
  const request = mainWindow.webContents.session.webRequest
  request.onBeforeSendHeaders(function(details, callback) {
    details.requestHeaders['Origin'] = 'report-generator';
    callback({cancel: false, requestHeaders: details.requestHeaders});
  })
})
