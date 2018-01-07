import React from 'react';

export default class ApiEdit extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="api-edit">
                <div>名称和描述</div>
                <div>请求方法 + 具体url</div>
                <div>headers</div>
                <div>querystring</div>
                <div>post的body区：key-value需研究下</div>

                <div>response1 返回概率多少</div>
                <div>response2 返回概率多少</div>
                <div>response3 返回概率多少</div>
            </div>
        );
    }
}