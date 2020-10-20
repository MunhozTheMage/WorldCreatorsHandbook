import createSaveObject from './saveObject.js';

const { saveFile, loadFile } = electron.fileApi;

export function save(saveObj = {}) {
    let fileContent = JSON.stringify(saveObj);
    let config = {
        filters: [
            {
                name: "JSON",
                extensions: ["json"]
            }
        ]
    }

    return saveFile(config, fileContent);
}

export function load() {
    let config = {
        properties: ["openFile"],
        filters: [
            {
                name: "JSON",
                extensions: ["json"]
            }
        ]
    }

    return loadFile(config);
}

export function newSaveFromConfig(name, description, image, cb) {
    let saveObj = createSaveObject(name, description, image);
    let saveDir = save(saveObj);

    if(!saveDir) return;

    cb({data: saveObj, dir: saveDir});
}

export function loadSaveFile(cb) {
    let save = load();

    if(!save.path) return;

    cb({data: JSON.parse(save.file), dir: save.path});
}

