import React from 'react';

export default class SearchAPI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div className="search-api">
                <input type="text" placeholder="filter name, url, description..." className="control" />
                <button type="submit">
                    <i className="iconfont">&#xf11d;</i>
                </button>
            </div>
        );
    }
}