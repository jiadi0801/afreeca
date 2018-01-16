import React from 'react';
import style from './QuickAccessBar.scss';

export default class QuickAccessBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="control">切换项目</div>
                <div className="control">接口总开关</div>
                <div className="control">网络速度控制</div>
            </div>
        );
    }
}
