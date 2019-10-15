import { app, BrowserWindow } from 'electron';
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

let mainWindow;

const createWindow = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 400,
    height: 400,
    frame: false,
    transparent: true
  });

  

  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/index.html`);

  // 打开调试工具栏
  // mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};

app.on('ready', () => setTimeout(createWindow, 500));

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
