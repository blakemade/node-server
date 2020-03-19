import http from 'http';

export const server: http.Server = http.createServer((request: http.IncomingMessage, response: http.ServerResponse) => {
    response.end('Hello World!');
});