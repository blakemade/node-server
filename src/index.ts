import fs from 'fs';
import http from 'http';
import { summarizeFilesInDirectorySync } from './FileSummarizer';
import { fsWriteFile } from './app_modules/fsWriteFile';
import { server } from './app_modules/httpServer';

const port: number = 3334 || process.env.port;
server.listen(port, () => console.log(`server listeing on ${port}`));

console.log(fsWriteFile);

console.log(summarizeFilesInDirectorySync('/Users/blake/Projects/node/node_server/src'));