import path from 'path';

const fs: any  = jest.genMockFromModule('fs');

let mockFiles = Object.create(null);

function __setMockFiles(newMockFiles: any) {
    mockFiles = Object.create(null);
    for (const file in newMockFiles) {
        const dir = path.dirname(file);
        if (!mockFiles[dir]) {
            mockFiles[dir] = [];
        } else {
            mockFiles[dir].push(path.basename(file));
        }
    }
}

function readdirSync(directoryPath: string) {
    return mockFiles[directoryPath] || [];
}

fs.__setMockFiles = __setMockFiles;
fs.readdirSync = readdirSync;
  
module.exports = fs;

//jest.mock('path')