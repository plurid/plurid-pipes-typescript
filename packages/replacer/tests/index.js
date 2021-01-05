const replacer = require('../distribution/index').default;



const main = async () => {
    // one
    {
        const replace = replacer(
            'simpleReplace',
            'simpleReplacedd',
        );
        const result = await replace(process.cwd() + '/tests/example.test.one');
        console.log('result', result);
    }


    // two
    {
        const replace = replacer(
            `    multi
            line
    replace`,
            `  multi
        line
    replaced`,
        );
        const result = await replace(process.cwd() + '/tests/example.test.two');
        console.log('result', result);
    }
}


main();
