const { ipcRenderer, contextBridge } = require('electron');
const remote = require('electron');
const fs = require('fs');

contextBridge.exposeInMainWorld('electron', {
    fileApi: {
        saveFile(options, fileContent) {
            return ipcRenderer.sendSync('save-file', options, fileContent);
        },
        loadFile(options) {
            return ipcRenderer.sendSync('load-file', options);
        }
    }
})