import React from 'react';

export default class PhoneLink extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {number} = this.props;
        const telLink = "tel:"+number;
        return (
            <a href={telLink}>{number}</a>
        )
    }
}