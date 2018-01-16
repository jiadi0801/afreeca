/**
 * api 基本信息，请求头，请求参数等
 */
import React from 'react';
import style from './ApiBase.scss';

export default class ApiBase extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div>名称和描述</div>
                <div>请求方法 + 具体url</div>
                <div>headers</div>
                <div>querystring</div>
            </div>
        );
    }
}
