<p align="center">
    <img src="https://raw.githubusercontent.com/plurid/plurid-pipes-typescript/master/about/identity/plurid-logo.png" height="250px">
    <br />
    <br />
    <a target="_blank" href="https://github.com/plurid/plurid-pipes-typescript/blob/master/LICENSE">
        <img src="https://img.shields.io/badge/license-DEL-blue.svg?colorB=1380C3&style=for-the-badge" alt="License: DEL">
    </a>
</p>



<h2 align="center">
    plurid' pipes for typescript
</h2>


<h3 align="center">
    Utility Pipes for TypeScript Scripts.
</h3>


<h1 align="center">
    File Finder Pipe
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
npm install -g @plurid/pipes.finder
```



## Usage

``` javascript
// finder-script.js
const finder = require('@plurid/pipes.finder').default;


// all the files in the `process.cwd()` directory
const allFiles = finder();

// all the files except those containing `'node_modules'` in name
const filesExclude = finder({
    exclude: [
        'node_modules',
    ],
});

// all the files with the extension `'.ts'`, except those in `'node_modules'`
const tsFiles = finder({
    extension: '.ts', // accepts RegExp
    exclude: [
        'node_modules',
    ],
});

// all the files from the `'path/to/root'` directory
const rootedFiles = finder({
    root: 'path/to/root',
});
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
