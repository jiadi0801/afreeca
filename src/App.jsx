import React from "react";
import axios from 'axios';
import Header from './views/Header/Header.jsx';
import Sidebar from './views/left/Sidebar.jsx';
import Workspace from './views/Workspace/Workspace.jsx';
import Footer from './views/Footer/Footer.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return (
            <div className="grid">
                <Header />
                <Sidebar />
                <Workspace />
                <Footer />
            </div>
        );
    }
}