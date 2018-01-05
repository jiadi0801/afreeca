import React from 'react';

export default class MenuDir extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        let props = this.props;
        return (
            <div className="lg-menu-dir">
                <a><i className="iconfont">&#xf123;</i><span>{props.title}</span></a>
                <div className="fast-icon">icon</div>
            </div>
        );
    }
}