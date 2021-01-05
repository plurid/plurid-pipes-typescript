// #region imports
    // #region libraries
    import {
        promises as fs,
    } from 'fs';
    // #endregion libraries


    // #region external
    import {
        ReplacerOptions,
        ReplaceOptions,
    } from '~interfaces/index';
    // #endregion external
// #endregion imports



// #region module
const replacer = (
    search: string,
    replace: string,
    options?: Partial<ReplacerOptions>,
) => {
    const replacerOptions: ReplacerOptions = {
        flags: options?.flags || 'gm',
    };

    return async (
        file: string,
        options?: Partial<ReplaceOptions>,
    ) => {
        try {
            const fileData = await fs.readFile(
                file,
                'utf-8',
            );

            const searchRE = new RegExp(
                search,
                replacerOptions.flags,
            );

            const replaced = fileData.replace(
                searchRE,
                replace,
            );

            if (options?.extract) {
                return replaced;
            }

            await fs.writeFile(
                file,
                replaced,
            );

            return true;
        } catch (error) {
            console.log('Replacer Pipe Error ::', error);

            return false;
        }
    }
}
// #endregion module



// #region exports
export default replacer;
// #endregion exports
