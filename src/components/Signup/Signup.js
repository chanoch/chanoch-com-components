import React, { Component } from 'react'

class Signup extends Component {
    render () {
        return (
            <section class="section section_newsletter">

            <div class="container">
                <div class="row justify-content-center">
    
                    <div class="col-sm-12 col-md-8 col-lg-6">
    
                        <h2 class="mb-0">Newsletter</h2>
                        <p class="mb-5">Subscribe to our updates to always be up to date with the latest news, events and promotions.</p>
                        
                        
                        <div id="mc_embed_signup">
                            <form class="section_newsletter__form validate" action="https://themeforest.us16.list-manage.com/subscribe/post-json?u=3c9679e26b601e1a87122b12f&id=e4b9351526&c=?" method="get" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" novalidate="">
                                <div id="mc_embed_signup_scroll" class="row">
                                    <div class="mc-field-group form-group col-md-9">
                                        <label for="mce-EMAIL" class="sr-only">E-mail address</label>
                                        <input type="email" value="" name="EMAIL" class="required email form-control" id="mce-EMAIL" placeholder="Email address" />
                                    </div>
                                    <div id="mce-responses" class="clear">
                                        <div class="response"></div>
                                        <div class="response" id="mce-success-response"></div>
                                    </div>
                                    
                                    <div aria-hidden="true" id="mce-hidden-input">
                                        <input type="text" name="b_507744bbfd1cc2879036c7780_4523d25e1b" tabindex="-1" value="" />
                                    </div>
                                    <div class="clear col-md-3 text-center">
                                        <button type="submit" class="btn" id="mc-embedded-subscribe">
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div> 
    
                    </div>
    
                </div> 
            </div> 
    
        </section>     
            )
    }
}

export default Signup