// #region imports
    import {
        promises as fs,
    } from 'fs';
// #endregion imports



// #region module
const replacer = async (
    search: string,
    replace: string,
) => {
    return (
        file: string,
    ) => {
        try {

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
