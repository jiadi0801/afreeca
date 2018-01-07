import React from 'react';
import left from './left.scss';

import SearchAPI from './SearchAPI.jsx';
import MenuDir from './MenuDir.jsx';
import MenuUrl from './MenuUrl.jsx';
import MenuItem from './MenuItem.jsx';

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="left">
                <div className="project">
                    <span className="proj-list">当前项目：京东视界智能多屏互动平台</span>
                </div>
                <SearchAPI />
                <div className="left-tab">
                    <div className="left-tab-hd">
                        <span className="left-tab-title">接口集</span>
                        <div className="fast-icon">全部收起</div>
                    </div>
                </div>
                <ul className="lg-menu lg-menu-v">
                    <MenuItem />
                    <li className="lg-menu-item">
                        <div className="lg-menu-title">
                            <MenuDir title="新增组件" />
                        </div>
                        <ul className="lg-menu-sub">
                            <li className="lg-menu-sub-item">
                                <MenuUrl />
                            </li>
                            <li className="lg-menu-sub-item">
                                <MenuUrl />
                            </li>
                        </ul>
                    </li>
                    <li className="lg-menu-item">
                        <div className="lg-menu-title">
                            <MenuUrl />
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}