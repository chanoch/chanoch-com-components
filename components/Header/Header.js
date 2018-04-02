import React, { Component } from 'react'

import './header.css';

class Header extends Component {
    render () {
        const {title, strapline, leftLink, leftLinkText} = this.props;
        return (
            <nav className="navbar navbar-light">
                <div className="container">
                    <span className="navbar-text order-2 order-md-1">{strapline}</span>
                    <a  href="/" 
                        className="navbar-brand mr-0 order-1 order-md-2">
                            {title}
                    </a>
                    <a className="nav-link order-12" href={leftLink}>{leftLinkText}</a>
                </div>
            </nav>
        )
    }
}

export default Header