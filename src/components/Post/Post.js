import React from 'react';
import {Link} from "react-router-dom";

import css from '../../components/PostId/Post.module.css'


const Post = ({post}) => {
    const {id, title} = post
    return (
        <div className={css.postTitle}>

            <Link to={id.toString()} state={post}>{id}) {title}

                <button className={css.postButton}>Post</button>

            </Link>

        </div>
    );
};

export default Post;