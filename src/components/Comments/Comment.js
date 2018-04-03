import React, { Component } from 'react'

class Comment extends Component {
    render () {
        return (
            <ul class="comments__list">
                <li class="comment">
                    <div class="comment__avatar">
                        <img src="assets/img/comment_img_4.jpg" class="img-fluid" alt="..." />
                    </div>
                    <div class="comment__content">
                        <h5 class="comment__user">
                            Jessica Border
                        </h5>
                        <div class="comment__date">
                            October 14, 2017 at 11:10 am
                        </div>
                        <div class="comment__message">
                            placeat eaque quaerat distinctio voluptatibus modi. Asperiores fugiat deleniti praesentium enim incidunt quaerat cupiditate repellendus and reprehend.
                        </div>
                        <div class="comment__reply">
                            <a href="">Reply</a>
                        </div>
                    </div>
                </li> 
            </ul> 
        )
    }
}

export default Comment