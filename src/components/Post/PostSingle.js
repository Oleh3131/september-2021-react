import React from 'react';
import {Link} from "react-router-dom";

import css from '../../components/PostId/Post.module.css'

const PostSingle = ({postId}) => {

    const {id, userId, title, body} = postId

    return (
        <div className={css.singlePost}>
            <h2>id: {id}</h2>
            <h4>userId: {userId}</h4>
            <p>title: {title}</p>
            <p>body: {body}</p>
            <Link to={'comments'}>
                <button className={css.singlePostButton}>Comments</button>
            </Link>
        </div>

    );
};

export default PostSingle;