const { BrowserWindow, app, ipcMain, Notification, dialog } = require("electron");
const path = require('path');
const fs = require('fs');

const isDev = !app.isPackaged;
let win;

function createWindow() {
    win = new BrowserWindow({
        width: 1200,
        height: 800,
        backgroundColor: "white",
        webPreferences: {
            nodeIntegration: false,
            worldSafeExecuteJavaScript: true,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
        }
    });

    win.loadFile("index.html");
}

if(isDev) {
    require("electron-reload")(__dirname, {
        electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
    });
}

// File saving
ipcMain.on("save-file", (e, config, fileContent) => {
    try {    
        let path = dialog.showSaveDialogSync(win, config);
        if(path === undefined) {
            e.returnValue = undefined;
            return;
        }
        fs.writeFile(path, fileContent, () => {});
        e.returnValue = path;
    }
    catch (error) {
        console.log(error)
    }
});

// File loading
ipcMain.on("load-file", (e, config) => {
    try {
        let path = dialog.showOpenDialogSync(win, config, () => {})[0];
        console.log(path);
        if(path === undefined) {
            e.returnValue = undefined;
            return;
        }
        let file = fs.readFileSync(path);
        e.returnValue = file.toString();
    } 
    catch (error) {
        console.log(error);
    }
})

app.whenReady().then(createWindow);