const replacer = require('../distribution/index').default;



const main = async () => {
    // one
    {
        const replace = replacer(
            'simpleReplace',
            'simpleReplacedd',
        );
        const result = await replace(process.cwd() + '/tests/example.one.test');
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
        const result = await replace(process.cwd() + '/tests/example.two.test');
        console.log('result', result);
    }


    // two extraction
    {
        const replace = replacer(
        `    multi
        line
replace`,
        `  multi
    line
replaced`,
        );
        const result = await replace(
            process.cwd() + '/tests/example.two.test',
            {
                extract: true,
            },
        );
        console.log('result', result);
    }


    // three
    {
        const replace = replacer(
            'one',
            'aaa',
        );
        const result = await replace(
            process.cwd() + '/tests/example.three.test',
            {
                extract: true,
            },
        );
        console.log('result', result);
    }
}


main();
