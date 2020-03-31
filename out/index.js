"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FileSummarizer_1 = require("./FileSummarizer");
var fsWriteFile_1 = require("./app_modules/fsWriteFile");
var httpServer_1 = require("./app_modules/httpServer");
var port = 3334 || process.env.port;
httpServer_1.server.listen(port, function () { return console.log("server listeing on " + port); });
fsWriteFile_1.createOrOverwriteFileOnDisk('./newFile.txt');
console.log(FileSummarizer_1.summarizeFilesInDirectorySync('/Users/blake/Projects/node/node_server/src'));
