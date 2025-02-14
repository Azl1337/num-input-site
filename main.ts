const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  const initialURL = `${__dirname}/browser/index.html`;
  mainWindow.loadURL(initialURL);
  
  const reloadURL = () => {
    const currentURL = mainWindow.webContents.getURL();
    if (!currentURL.endsWith('index.html')) {
      mainWindow.loadURL(initialURL);
    }
  };

  mainWindow.webContents.on('did-fail-load', (_event: Electron.Event, errorCode: number) => {
    if (errorCode === -105) { 
      reloadURL();
    }
  });

  mainWindow.webContents.on('did-navigate', () => {
    reloadURL();
  });
  mainWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});