// import { PathLike } from "fs";

import fs from 'fs';
// import { TextDecoder } from 'util';

export function summarizeFilesInDirectorySync(directory: string) : any[] {
  return fs.readdirSync(directory).map((fileName: string) => ({
    directory,
    fileName
  }));
}

// exports.summarizeFilesInDirectorySync = summarizeFilesInDirectorySync;