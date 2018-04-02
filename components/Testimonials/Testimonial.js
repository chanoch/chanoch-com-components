import React, { Component } from 'react'

class Testimonial extends Component {
    render () {
        const {reference, author} = this.props;
        return (
            <div class="section_testimonials_carousel_item">
                <p class="section_testimonials_text">{reference}</p>
                <p class="section_testimonials_author text-italic">{author}</p>
            </div> 
        )
    }
}

export default Testimonial