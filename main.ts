import { app, BrowserWindow } from 'electron';
import path from 'path';

let mainWindow: BrowserWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  // Загрузи Angular-приложение
  if (process.env['NODE_ENV'] === 'development') {
    mainWindow.loadURL('http://localhost:4200'); // Для разработки
  } else {
    mainWindow.loadFile(path.join(__dirname, 'dist/num-input-site/browser/index.html')); // Для production
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