import React, { Component } from 'react'

import './social.css';

class SocialRow extends Component {
    render () {
        return (
			<div class="row justify-content-center">

				<div class="col-sm-12 col-md-10 col-lg-7">

					<ul class="social__list">
						<li><a href="#"><i class="ion-social-twitter"></i></a></li>
						<li><a href="#"><i class="ion-social-facebook"></i></a></li>
						<li><a href="#"><i class="ion-social-instagram"></i></a></li>
						<li><a href="#"><i class="ion-social-foursquare"></i></a></li>
					</ul>

				</div>
			</div>
        )
    }
}

export default SocialRow