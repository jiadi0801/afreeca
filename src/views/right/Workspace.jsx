import React from 'react';
import right from './right.scss';

import Toolbar from './Toolbar.jsx';

export default class Workspace extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
<div className="right">
    <div className="workspace">
        <div>工程代码引入</div>
        <Toolbar />
        <div className="api-edit">
            <div>名称和描述</div>
            <div>请求 + 具体url</div>
            <div>headers</div>
            <div>querystring</div>
            <div>post的body区：key-value需研究下</div>

            <div>response1</div>
            <div>response2</div>
            <div>response3</div>
        </div>
    </div>
</div>
        );
    }
}