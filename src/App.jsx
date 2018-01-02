import React from "react";
import axios from 'axios';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return (
            <div>
                <footer className="footer">©京东用户体验设计部-前端开发部</footer>
            </div>
        );
    }
}