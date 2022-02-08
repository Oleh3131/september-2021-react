import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import Post from "../../components/Post/Post";
import {getPost} from "../../slices/post.slice";
import css from "../../components/Car.module.css";

const PostsPage = () => {

    const {posts,status,error} = useSelector(state => state.post);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPost());
    },[])

    return (
        <div className={css.PostsBlock}>
            {status==='pending' &&  <h2>Download process....</h2>}
            {error && <h2>ERROR.....</h2>}
            <div className={css.mainPosts}>
                {posts.map(post=><Post key={post.id} post={post}/>)}
            </div>

        </div>
    );
};

export default PostsPage;