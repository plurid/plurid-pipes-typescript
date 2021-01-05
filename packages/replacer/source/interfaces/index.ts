// #region module
export interface ReplacerOptions {
    /**
     * Regular Expression replacement flags.
     *
     * Default: `'gm'`.
     */
    flags: string;
}


export interface ReplaceOptions {
    /**
     * Return the replaced result.
     *
     * Default: `false`.
     */
    extract: boolean;

    /**
     * Write result to another file.
     */
    redirect: string;
}
// #endregion module
