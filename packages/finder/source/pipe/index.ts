// #region imports
    // #region libraries
    import fs from 'fs';
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


const finder = async (
    options?: Partial<FinderOptions>,
) => {
    const finderOptions = resolveOptions(options);

}
// #endregion module



// #region exports
export default finder;
// #endregion exports
