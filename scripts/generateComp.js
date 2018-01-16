const fs = require('fs');
const path = require('path');

function generate(fullpath, name) {
    let jsxTPL = `import React from 'react';
import style from './${name}.scss';

export default class ${name} extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div></div>
        );
    }
}
`;
    fs.mkdirSync(path.resolve(fullpath, name));
    fs.writeFileSync(path.resolve(fullpath, name, name + '.jsx'), jsxTPL);
    fs.writeFileSync(path.resolve(fullpath, name, name + '.scss'), '');
}

function run() {
    let name = process.argv[2];
    if (!/^[A-Z]/.test(name)) {
        console.log('需要首字母大写');
        return;
    }
    let fullpath = path.resolve(__dirname, '../src/components/');
    generate(fullpath, name);
}
run();