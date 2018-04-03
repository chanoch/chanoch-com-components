import React, { Component } from 'react'

class CommentForm extends Component {
    render () {
        return (

			<div class="row justify-content-center">
				<div class="col-sm-12 col-md-10 col-lg-7">

					<h4 class="text-center">
						Leave a comment
					</h4>

					
					<form class="comments__form">

						<div class="form-group">
							<label for="name" class="sr-only">Name (Required)</label>
							<input type="text" name="name" class="form-control" id="name" placeholder="Enter Your Full Name" />
						</div>

						<div class="form-group">
							<label for="email" class="sr-only">Email address (Required)</label>
							<input type="email" name="email" class="form-control" id="email" placeholder="Enter Your E-mail" />
						</div>

						<div class="form-group">
							<label for="website" class="sr-only">Website</label>
							<input type="email" name="website" class="form-control" id="website" placeholder="Enter website" />
						</div>

						<div class="form-group">
							<label for="message" class="sr-only">Message (Required)</label>
							<textarea name="message" class="form-control" rows="6" id="message" placeholder="Enter Your Message"></textarea>
							<span class="help-block"></span>
						</div>

						<button type="submit" class="btn btn-accent">
							Post comment
						</button>
					</form>
				</div>
			</div> 
            
        )
    }
}

export default CommentForm