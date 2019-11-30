const { app, BrowserWindow } = require("electron");
const url = require("url");
const path = require("path");

let win;

function createWindow () {
  // 新規ウインドウ生成
  win = new BrowserWindow({
    width: 800, 
    height: 700,
    webPreferences: {
      nodeIntegration: true
    }
  });

  var p = url.format({
      pathname: path.join(__dirname, `/dist/visual-logo/index.html`),
      protocol: "file:",
      slashes: true
    }
  );
  console.log(p);
  win.loadURL(p);

  // 起動時に開発者ツールを開く
  win.webContents.openDevTools();

  // ウインドウが閉じたときのイベント
  win.on('closed', function () {
    win = null;
  });
}

// Electron初期化時にウィンドウ生成
app.on('ready', createWindow);

// すべてのウインドウが閉じたときにElectronを終了する。
app.on('window-all-closed', function () {

  // macOSの場合
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  // macOSの場合
  if (win === null) {
    createWindow();
  }
});

