import React, { Component } from 'react';
import {savedPosts} from '../posts.json';
import css from './css/Content.module.css';
import PostItem from './PostItem';

export class Content extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={css.Content}>
                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                </div>
                <div className={css.SearchResults}>
    
                    {/* { 
                    savedPosts.map(post => {
                        return (
                            <div className={css.SearchItem}>
                                <p>{post.title}</p>
                                <p>{post.name}</p>
                                <img alt="post image"src={post.image}/>
                                <p>{post.description}</p>
                            </div>
                        )
                    }

                    )
                    } */}

                    <PostItem savedPosts={savedPosts} />
                </div>
                
            </div>
        )
    }
}

export default Content