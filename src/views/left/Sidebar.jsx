import React from 'react';
import left from './left.scss';

import MenuDir from './MenuDir.jsx';
import MenuUrl from './MenuUrl.jsx'

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="left">
                <div>搜索框</div>
                <ul className="lg-menu lg-menu-v">
                    <li className="lg-menu-item">
                        <div className="lg-menu-title">
                            <MenuDir />
                        </div>
                        <ul className="lg-menu-sub">
                            <li className="lg-menu-sub-item lg-menu-on">
                                <MenuUrl />
                            </li>
                            <li className="lg-menu-sub-item">
                                <MenuUrl />
                            </li>
                        </ul>
                    </li>
                    <li className="lg-menu-item">
                        <div className="lg-menu-title">
                            <MenuDir />
                        </div>
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