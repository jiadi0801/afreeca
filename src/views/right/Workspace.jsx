import React from 'react';
import right from './right.scss';

import Toolbar from './Toolbar.jsx';
import CopyCode from './CopyCode.jsx';
import ApiEdit from './ApiEdit/ApiEdit.jsx';

export default class Workspace extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
<div className="right">
    <div className="workspace">
        <CopyCode />
        <Toolbar />
        <ApiEdit />
    </div>
</div>
        );
    }
}