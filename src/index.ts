import fs from 'fs';
import http from 'http';
import { summarizeFilesInDirectorySync } from './FileSummarizer';

fs.writeFile('./newFile.txt', null, (error) => {
    if (error) console.log(`fs.writeFile error: ${error}`);
    else console.log('file created successfully');
});

const port: number = 3334;

const server: http.Server = http.createServer((request: http.IncomingMessage, response: http.ServerResponse) => {
    response.end('Hello World!');
});

server.listen(port, () => console.log(`server listeing on ${port}`));

console.log(summarizeFilesInDirectorySync('/'));