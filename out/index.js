"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var http_1 = __importDefault(require("http"));
var FileSummarizer_1 = require("./FileSummarizer");
fs_1.default.writeFile('./newFile.txt', null, function (error) {
    if (error)
        console.log("fs.writeFile error: " + error);
    else
        console.log('file created successfully');
});
var port = 3334;
var server = http_1.default.createServer(function (request, response) {
    response.end('Hello World!');
});
server.listen(port, function () { return console.log("server listeing on " + port); });
console.log(FileSummarizer_1.summarizeFilesInDirectorySync('/'));
