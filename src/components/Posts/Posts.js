import React, {useEffect, useState} from 'react';

import {postService} from "../../services/post.servise";
import Post from '../Post/Post'

const Posts = ({userId}) => {

    const [posts, setPost] = useState([]);

    useEffect(() => {

        postService.getPostId(userId).then(value => setPost(value))

    }, [userId]);


    return (

        <div >
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;