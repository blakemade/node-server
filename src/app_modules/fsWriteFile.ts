import fs from 'fs';

export const fsWriteFile = fs.writeFile('./newFile.txt', null, (error) => {
    if (error) console.log(`fs.writeFile error: ${error}`);
    else console.log('file created successfully');
})