import React from 'react';
import style from './Workspace.scss';

import ApiBase from '../../components/ApiBase/ApiBase.jsx';
import ApiPayload from '../../components/ApiPayload/ApiPayload.jsx';
import ApiResponse from '../../components/ApiResponse/ApiResponse.jsx';
import Toolbar from '../../components/Toolbar/Toolbar.jsx';

export default class Workspace extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="workspace">
                <Toolbar />
                <ApiBase />
                <ApiPayload />
                <ApiResponse />
                <ApiResponse />
                <ApiResponse />
            </div>
        );
    }
}