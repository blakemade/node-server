import fs from 'fs';

export const createOrOverwriteFileOnDisk = (fileName: string, fileText?: string) => {
    if (fs.existsSync(fileName)) {
        console.log('file already exists');
        return;
    } else {
        fs.writeFile(fileName, fileText || null, (error) => {
            if (error) console.log(`fs.writeFile error: ${error}`);
            else console.log('file created successfully');
        });
    }
}