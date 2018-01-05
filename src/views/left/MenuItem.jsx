import React from 'react';

import MenuDir from './MenuDir.jsx';
import MenuUrl from './MenuUrl.jsx';

export default class MenuItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <li className="lg-menu-item unfold">
                <div className="lg-menu-title lg-menu-on">
                    <MenuDir title="默认" />
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
        );
    }
}