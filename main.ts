const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow : Electron.BrowserWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  if (process.env['NODE_ENV'] === 'development') {
    mainWindow.loadURL('http://localhost:4200'); //dev
  } else {
    mainWindow.loadFile(path.join(__dirname, 'browser/index.html')); //prod
  }

  mainWindow.on('closed', () => {
    mainWindow = null!;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});