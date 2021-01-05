// #region imports
    // #region libraries
    import fs from 'fs';

    import path from 'path';
    // #endregion libraries


    // #region external
    import {
        FinderOptions,
    } from '#interfaces/index';
    // #endregion external
// #endregion imports



// #region module
const resolveOptions = (
    options?: Partial<FinderOptions>,
) => {
    const resolvedOptions: FinderOptions = {
        root: options?.root ?? process.cwd(),
        extension: options?.extension || '',
        exclude: options?.exclude || [],
    };

    return resolvedOptions;
}


const finder = (
    options?: Partial<FinderOptions>,
) => {
    const finderOptions = resolveOptions(options);

    const getAllFiles = (
        dirPath: string,
        arrayOfFiles?: string[],
    ) => {
        const files = fs.readdirSync(dirPath);

        let arrayOfFilesIn = arrayOfFiles || [];

        files.forEach(function(file) {
            if (fs.statSync(dirPath + "/" + file).isDirectory()) {
                arrayOfFilesIn = getAllFiles(dirPath + "/" + file, arrayOfFilesIn);
            } else {
                arrayOfFilesIn.push(path.join(__dirname, dirPath, "/", file));
            }
        });

        return arrayOfFilesIn;
    }

    const files = getAllFiles(
        finderOptions.root,
    );

    return files;
}
// #endregion module



// #region exports
export default finder;
// #endregion exports
