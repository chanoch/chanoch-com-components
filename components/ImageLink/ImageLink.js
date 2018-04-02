import React from 'react';

export default class ImageLink extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {link, linkTitle, src, altText} = this.props;
        return (
            <a href={link} title={linkTitle}>
                <img src={src} alt={altText} />
            </a>
        )
    }
}