import React from 'react';

export default class MenuDir extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div className="lg-menu-dir">
                <span>菜单-新增组件</span>
                <div className="fast-icon">
                    &lt;
                    ^
                    &gt;
                </div>
            </div>
        );
    }
}