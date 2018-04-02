import React, { Component } from 'react'

import './footer.css';
import '../Social/social.css';

export default class Footer extends Component {
    render () {
        const {rights, twitterLink, twitterLInkText, linkedinLink, linkedinLinkText} = this.props;
        return (
            <footer className="section_footer">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <p>{rights}</p>
                        </div>
                        <div className="col-12 col-md-6">
                            <ul className="social__list">
                                <li><a href={twitterLink} title={twitterLInkText}><i className="ion-social-twitter"></i></a></li>
                                <li><a href={linkedinLink} title={linkedinLinkText}><i className="ion-social-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div> 
                </div>
            </footer> 
        )
    }
}