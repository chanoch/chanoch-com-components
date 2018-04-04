import React from 'react';

import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Divider from '../Divider/Divider';
import Footer from '../Footer/Footer';

import './layout.css';

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
    } 
 
    render() {
        const { title, active, config } =  this.props;
        return (
            <div>
                <Header title={config.title} 
                    strapline={config.strapline} 
                    leftLink={config.linkedinLink} 
                    leftLinkText={config.headerLinkText} />

                <Divider />
                <Navigation active={active} menuItems={config.menuItems}/>
                <Divider />

                <section className="section">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-12">
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </section>

                <Footer 
                    rights={config.rights} 
                    twitterLink={config.twitterLink} 
                    twitterLinkText={config.twitterLinkText}
                    linkedinLink={config.linkedinLink}
                    linkedinLinkText={config.linkedinLinkText}
                    />
            </div>
        )
    }
}