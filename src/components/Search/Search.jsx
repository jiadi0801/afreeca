import React from 'react';
import style from './Search.scss';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
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
