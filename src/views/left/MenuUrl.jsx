import React from 'react';

export default class MenuUrl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div className="lg-menu-file">
                <a><span>http://index.jd.com/price/default</span></a>
                <div className="fast-icon">icon</div>
            </div>
        );
    }
}