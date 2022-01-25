import React, {useEffect, useState} from 'react';

import {postService} from "../../services/post.service";
import Post from "../../components/Post/Post";

const PostsPage = () => {

    const [posts,setPosts] = useState([]);

    useEffect(() => {

        postService.getPosts().then(value => setPosts(value));

    },[]);

    return (
        <div>
            {posts.map(value => <Post key={value.id} posts={value}/>)}
        </div>
    );
};

export default PostsPage;