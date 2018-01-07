import React from 'react';

export default class CopyCode extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let value = `<script src="http://afreeca.jd.com/project123.js"></script>`
        return (
            <div class="import-code">
                <span>工程引入代码</span>
                <input type="text" class="control" value={value} />
            </div>
        );
    }
}