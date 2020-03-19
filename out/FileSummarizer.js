"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs');
function summarizeFilesInDirectorySync(directory) {
    return fs.readdirSync(directory).map(function (fileName) { return ({
        directory: directory,
        fileName: fileName,
    }); });
}
exports.summarizeFilesInDirectorySync = summarizeFilesInDirectorySync;
// exports.summarizeFilesInDirectorySync = summarizeFilesInDirectorySync;
