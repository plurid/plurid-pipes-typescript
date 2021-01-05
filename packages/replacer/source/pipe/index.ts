// #region imports
    import {
        promises as fs,
    } from 'fs';
// #endregion imports



// #region module
const replacer = (
    search: string,
    replace: string,
    flags: string = 'gm',
) => {
    return async (
        file: string,
    ) => {
        try {
            const fileData = await fs.readFile(
                file,
                'utf-8',
            );

            const searchRE = new RegExp(
                search,
                flags,
            );

            const replaced = fileData.replace(searchRE, replace);

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
