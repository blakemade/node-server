import { summarizeFilesInDirectorySync } from './FileSummarizer';
import { createOrOverwriteFileOnDisk } from './app_modules/fsWriteFile';
import { server } from './app_modules/httpServer';

const port: number = 3334 || process.env.port;
server.listen(port, () => console.log(`server listening on ${port}`));

createOrOverwriteFileOnDisk('./newFile.txt');

console.log(summarizeFilesInDirectorySync('/Users/blake/Projects/node/node_server/src'));