const { app, BrowserWindow } = require('electron')

try {
  require('electron-reloader')(module)
} catch (_) {}

const createWindow = () => {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  })

  win.loadURL('http://localhost:8081')

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)
