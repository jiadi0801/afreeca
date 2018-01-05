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
                <span>饼图-url占两行</span>
                <span>http://index.jd.com/price/default</span>
            </div>
        );
    }
}