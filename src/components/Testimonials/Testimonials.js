import React, { Component } from 'react'

import Testimonial from './Testimonial';

class Testimonials extends Component {
    render () {
        return (
            <section class="section section_testimonials">
                <div class="container">
                    <div class="row justify-content-center text-center pb-5">
                        <div class="col-xs-12 col-sm-12 col-md-8">
                            <h2 class="section_testimonials_title">Testimonials</h2>
                            <div class="section_testimonials_carousel">
                                <Testimonial />
                            </div>
                        </div>
                    </div> 
                </div> 
            </section>
        )
    }
}

export default Testimonials