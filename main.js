const {app,BrowserWindow,ipcMain} = require('electron');

function createWindow(){
    const win = new BrowserWindow({
        width:310,
        height:594,
        resizable:false,
        frame:false,
        webPreferences:{
            nodeIntegration: true,
            contextIsolation: false,
        }
    });

    win.loadFile('./index.html');
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
  
ipcMain.on('close', ()=>{
    app.quit();
});