import React, { Component } from 'react';
import {savedPosts} from '../posts.json';
import css from './css/Content.module.css';
import PostItem from './PostItem';
import Loader from './Loader';

export class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            posts: [],
        }

    }

    componentDidMount() {
        setTimeout(()=>{
            this.setState({
                isLoaded: true,
                posts: savedPosts,
            })
        }, 2000)
    }

    handleChange = (e) => {
        const name = e.target.value.toLowerCase();
        const filteredPosts = savedPosts.filter((post)=>{
            return post.name.toLowerCase().includes(name);
        })
        
        this.setState({
            posts: filteredPosts
        })
    }
    
    render() {
        return (
            <div className={css.Content}>
                <div className={css.TitleBar}>
                     <h1>My Photos</h1>
                     <form>
                        <label htmlForm="searchinput">Search:</label>
                        <input 
                        type="search" 
                        id="searchinput"
                        placeholder='By Author'
                        onChange={(e) => this.handleChange(e)}
                        ></input>
                        <h4>posts found: {this.state.posts.length}</h4>
                    </form>
                   
                </div>
                <div className={css.SearchResults}>
                    {
                        this.state.isLoaded ?
                        <PostItem savedPosts={this.state.posts} />
                        : <Loader />
                    }
    
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
                    } 

                    <PostItem savedPosts={savedPosts} />*/}
                </div>
                
            </div>
        )
    }
}

export default Content