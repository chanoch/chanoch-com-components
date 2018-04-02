import React, { Component } from 'react'

import Comment from './Comment';

class Comments extends Component {
    render () {
        return (
            <div class="row justify-content-center">
            <div class="col-sm-12 col-md-10 col-lg-7">
                
                <div class="section_blog-item__comments">
                    <h4 class="text-center">
                        # Comments
                    </h4>

                    <Comment />
                </div> 
            </div>
            </div> 
        )
    }
}

export default Comments