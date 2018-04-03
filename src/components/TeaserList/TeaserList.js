import React, { PureComponent } from 'react'

import Teaser from './Teaser';

class TeaserList extends PureComponent {
    render () {
        const {recipies} = this.props;
        return (
            <section class="section section_blog">
                <div class="container">
                    <div class="row justify-content-between">
                        <div class="col-12">
                        {recipies.map((recipe)=> {
                            <Teaser key={recipe.key} recipe={recipe}/>
                        })}
                        </div>
                    </div> 
                </div>
            </section> 
        )
    }
}

export default TeaserList