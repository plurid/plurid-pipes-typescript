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
        exclude: options?.exclude
            ? Array.isArray(options.exclude)
                ? options.exclude : []
            : [],
    };

    return resolvedOptions;
}


const getAllFiles = (
    rootPath: string,
    options: FinderOptions,
    arrayOfFiles?: string[],
) => {
    const files = fs.readdirSync(rootPath);

    let arrayOfFilesIn = arrayOfFiles || [];

    files.forEach((file) => {
        if (options.exclude.length > 0) {
            for (const excluder of options.exclude) {
                if (file.includes(excluder)) {
                    return;
                }
            }
        }

        if (
            fs.statSync(rootPath + '/' + file).isDirectory()
        ) {
            arrayOfFilesIn = getAllFiles(
                rootPath + '/' + file,
                options,
                arrayOfFilesIn,
            );
        } else {
            if (options.extension) {
                const extname = path.extname(file);
                if (!extname.match(options.extension)) {
                    return;
                }
            }

            arrayOfFilesIn.push(
                path.join(__dirname, rootPath, '/', file),
            );
        }
    });

    return arrayOfFilesIn;
}


const finder = (
    options?: Partial<FinderOptions>,
): string[] => {
    try {
        const finderOptions = resolveOptions(options);

        const files = getAllFiles(
            finderOptions.root,
            finderOptions,
        );

        return files;
    } catch (error) {
        console.log('Finder Pipe Error ::', error);

        return [];
    }
}
// #endregion module



// #region exports
export default finder;
// #endregion exports
