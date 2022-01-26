import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {postService} from "../../services/post.service";
import Post from "../../components/Post/Post";
import css from "../../components/PostId/Post.module.css";

const PostsPage = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        postService.getPosts().then(value => setPosts(value));

    }, []);

    return (
        <div className={css.allContent}>

            <div className={css.post}>
                {posts.map(value => <Post key={value.id} post={value}/>)}
            </div>

            <div className={css.comments}>
                <Outlet/>
            </div>

        </div>
    );
};

export default PostsPage;