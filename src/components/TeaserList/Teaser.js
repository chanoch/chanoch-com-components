import React, { Component } from 'react'

class Teaser extends Component {
    render () {
        const {date, category, categoryLink, credit, title, text} = this.props;
        return (
            <div class="section_blog__item">
        
                <ul class="blog_info">
                    {date && 
                        <li>{date}</li>
                    }
                    <li>/</li>
                    {category &&
                        <li><a href={categoryLink}>{category}</a></li>
                    }
                    <li>/</li>
                    { credit && 
                        <li>{credit}</li>
                    }
                </ul>

                <a href="blog-item.html" class="blog_title animsition-link">
                    <h4 data-hover={title}>{title}</h4>
                </a>

                <p class="blog_desc">{text}</p>
            </div> 
        )
    }
}

export default Teaser