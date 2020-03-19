import { PathLike } from "fs";

const fs = require('fs');

export function summarizeFilesInDirectorySync(directory: string) : [] {
  return fs.readdirSync(directory).map((fileName: string) => ({
    directory,
    fileName,
  }));
}

// exports.summarizeFilesInDirectorySync = summarizeFilesInDirectorySync;