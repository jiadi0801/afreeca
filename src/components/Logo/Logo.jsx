import React from 'react';
import style from './Logo.scss';

export default class Logo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="logo">Afreeca</div>
        );
    }
}
