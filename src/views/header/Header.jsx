import React from 'react';
import style from './Header.scss';

import Logo from '../../components/Logo/Logo.jsx';
import Login from '../../components/Login/Login.jsx';
import QuickAccessBar from '../../components/QuickAccessBar/QuickAccessBar.jsx';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div className="header">
                <div className="left-hd">
                    <Logo />
                    <Login />
                </div>
                <div className="right-hd">
                    <QuickAccessBar />
                </div>
            </div>
        );
    }
}