"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
exports.fsWriteFile = fs_1.default.writeFile('./newFile.txt', null, function (error) {
    if (error)
        console.log("fs.writeFile error: " + error);
    else
        console.log('file created successfully');
});
