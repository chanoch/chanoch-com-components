import React, { PureComponent } from 'react'

import './navigation.css';

/** 
 * Create a list of menu items from the menuItems prop. 
 * 
 * The "active" prop identifies which page the user is currently at.
 */
class Navigation extends PureComponent {
    render () {
        const {active, menuItems} = this.props;
        return (
            <nav className="nav">
                {menuItems.map((item) => {
                    var classes = "nav-link";
                    classes += (item.text === active?" active":"")
                    return <a key={item.key} className={classes} href={item.link}>{item.linkText}</a>
                })}
            </nav>
        )
    }
}

export default Navigation