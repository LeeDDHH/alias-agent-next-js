// Native
const { join } = require('path')
const { format } = require('url')

// Packages
const { BrowserWindow, app, ipcMain, screen } = require('electron')
const isDev = require('electron-is-dev')
const prepareNext = require('electron-next')

// Prepare the renderer once the app is ready
app.on('ready', async () => {
  await prepareNext('./renderer')
  const display = screen.getPrimaryDisplay();

  const mainWindow = new BrowserWindow({
    width: display.bounds.width,
    height: display.bounds.height,
    transparent: true,
    frame: false,
    resizable: false,
    movable: false,
    alwaysOnTop: true,
    fullscreenable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      preload: join(__dirname, 'preload.js'),
    },
  })

  const url = isDev
    ? 'http://localhost:8000'
    : format({
        pathname: join(__dirname, '../renderer/out/index.html'),
        protocol: 'file:',
        slashes: true,
      })

  mainWindow.loadURL(url)
})

// Quit the app once all windows are closed
app.on('window-all-closed', app.quit)

ipcMain.handle('message', (event, message) => {
  return message+"add"
})
