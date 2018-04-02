import React, { PureComponent } from 'react'

import './herrvonmuellerhoff-regular.css';
import './signature.css';

class Signature extends PureComponent {
    render () {
        const {text} = this.props;
        return (
            <div className="signature_img">
                <p className="signature">{text}</p>
            </div>
        )
    }
}

export default Signature