/**
 * 工作区侧边栏
 */
import React from 'react';
import style from './Toolbar.scss';

export default class Toolbar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="toolbar">
                工具侧边栏
            </div>
        );
    }
}
