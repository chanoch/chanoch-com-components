import React, { Component } from 'react'

class Quote extends Component {
    render () {
        const {quote, author} = this.props;
        return (
            <section className="section section_quote">
                <div className="container">
                        <div className="row justify-content-center text-center">

                            <div className="col-xs-12 col-md-10 col-lg-8">
                                <blockquote className="section_quote__blockquote">
                                    <p className="text-center">{quote}</p>
                                    <footer className="text-center text-italic">{author}</footer>
                                </blockquote>
                            </div>
                        </div> 
                    </div> 
            </section>
        )
    }
}

export default Quote
