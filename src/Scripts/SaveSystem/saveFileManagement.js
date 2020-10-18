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

