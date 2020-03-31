"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
// import path from 'path';
exports.createOrOverwriteFileOnDisk = function (fileName, fileText) {
    if (fs_1.default.existsSync(fileName)) {
        console.log('file already exists');
        return;
    }
    else {
        fs_1.default.writeFile(fileName, fileText || null, function (error) {
            if (error)
                console.log("fs.writeFile error: " + error);
            else
                console.log('file created succesfully');
        });
    }
};
