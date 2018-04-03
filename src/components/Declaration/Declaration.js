import React from 'react';

import './declaration.css';

/**
 * Title and lead text in the middle
 * 
 * @argument heading - declaration title
 * @argument text - declaration text
 */
export default class Declaration extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const {title, text, bg} = this.props;
        return (
            <div className="block">            
                <div className="container center">
                    <h2>{title}</h2>
                    <p className="lead">{text}</p>
                </div>
                {bg && 
                    <div className="bg bg-color-neutral opacity-40"></div>
                }{!bg && 
                    <div className="bg"></div>
                }
            </div>
        )
    }
}