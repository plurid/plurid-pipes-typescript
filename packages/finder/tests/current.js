const finder = require('../distribution/index').default;



// const allFiles = finder();
// console.log(allFiles);


// const filesExclude = finder({
//     exclude: [
//         'node_modules',
//     ],
// });
// console.log(filesExclude);


// const tsFiles = finder({
//     extension: '.ts',
//     exclude: [
//         'node_modules',
//     ],
// });
// console.log(tsFiles);


// const tsxFiles = finder({
//     extension: '.tsx?',
//     exclude: [
//         'node_modules',
//     ],
// });
// console.log(tsxFiles);


const rootedFiles = finder({
    root: process.cwd() + '/tests',
    extension: '.tsx?',
    exclude: [
        'node_modules',
    ],
});
console.log(rootedFiles);
