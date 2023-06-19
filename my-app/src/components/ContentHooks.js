import React, { useState, useEffect } from 'react';
import {savedPosts} from '../posts.json';
import css from './css/Content.module.css';
import PostItem from './PostItem';
import Loader from './Loader';

function ContentHooks() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [fetchedPosts, setFetchedPosts] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
            setFetchedPosts(savedPosts);
        }, 2000)
    }, []);

    const handleChange = (e) => {
        const name = e.target.value.toLowerCase();
        const filteredPosts = savedPosts.filter((post)=>{
            return post.name.toLowerCase().includes(name);
        })
        
        setFetchedPosts(filteredPosts)
    }

    
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
                    onChange={(e) => handleChange(e)}
                    ></input>
                    <h4>Posts found: {fetchedPosts.length}</h4>
                </form>
                
            </div>
            <div className={css.SearchResults}>
                {
                    isLoaded ?
                    <PostItem savedPosts={fetchedPosts} />
                    : <Loader />
                }
            </div>
        </div>
    )
}

export default ContentHooks