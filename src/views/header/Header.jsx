import React from 'react';
import header from './header.scss';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div className="header">
                <div className="left-hd">
                    <div className="logo">Afreeca</div>
                    <div>用户名: 刘佳</div>
                </div>
                <div className="right-hd">
                    <div className="control">切换项目</div>
                    <div className="control">接口总开关</div>
                    <div className="control">网络速度控制</div>
                </div>
            </div>
        );
    }
}