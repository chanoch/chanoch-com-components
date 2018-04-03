import React, { Component } from 'react'

class Image extends Component {
    render () {
        const {src, alt}
        return (
            <div class="col-sm-12 col-md-5 order-2 order-sm-first">
                <div class="section_blog__img">
                    <img src={src} class="img-fluid" alt={alt} />
                </div>
            </div>
        )
    }
}

export default Image