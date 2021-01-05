<p align="center">
    <img src="https://raw.githubusercontent.com/plurid/plurid-pipes-typescript/master/about/identity/plurid-logo.png" height="250px">
    <br />
    <br />
    <a target="_blank" href="https://github.com/plurid/plurid-pipes-typescript/blob/master/LICENSE">
        <img src="https://img.shields.io/badge/license-DEL-blue.svg?colorB=1380C3&style=for-the-badge" alt="License: DEL">
    </a>
</p>



<h2 align="center">
    plurid' pipes
</h2>


<h3 align="center">
    Utility Pipes for Scripts.
</h3>


<h1 align="center">
    Content Replacer Pipe
</h1>


<br />



### Contents

+ [Install](#install)
+ [Usage](#usage)
+ [Packages](#packages)
+ [Codeophon](#codeophon)



## Install

It is preferred to install the `pipe` globally

``` bash
npm install -g @plurid/pipes.replacer
```



## Usage

Require in script file, generate a `replace` function, use it on files.

``` javascript
const replacer = require('../distribution/index').default;


const main = async () => {
    // obtain a replacer function
    const replace = replacer(
        'searchString',
        'replaceString',
    );

    // use the replacer by passing paths to files
    await replace('/path/to/file');
}


main();
```


The following options can be passed to the `replacer` and to `replace`

``` typescript
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
```



## Packages

<a target="_blank" href="https://www.npmjs.com/package/@plurid/pipes.finder">
    <img src="https://img.shields.io/npm/v/@plurid/pipes.finder.svg?logo=npm&colorB=1380C3&style=for-the-badge" alt="Version">
</a>

[@plurid/pipes.finder][pipes.finder] • files finder pipe

[pipes.finder]: https://github.com/plurid/plurid-pipes-typescript/tree/master/packages/finder


<a target="_blank" href="https://www.npmjs.com/package/@plurid/pipes.replacer">
    <img src="https://img.shields.io/npm/v/@plurid/pipes.replacer.svg?logo=npm&colorB=1380C3&style=for-the-badge" alt="Version">
</a>

[@plurid/pipes.replacer][pipes.replacer] • content replacer pipe

[pipes.replacer]: https://github.com/plurid/plurid-pipes-typescript/tree/master/packages/replacer



## [Codeophon](https://github.com/ly3xqhl8g9/codeophon)

+ licensing: [delicense](https://github.com/ly3xqhl8g9/delicense)
+ versioning: [αver](https://github.com/ly3xqhl8g9/alpha-versioning)
