import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams} from "react-router-dom";

import {postService} from "../../services/post.service";
import PostSingle from "../Post/PostSingle";

const PostId = () => {

    const [postId, setPostId] = useState(null);

    const {id} = useParams();

    const {state} = useLocation();

    useEffect(() => {
        if (state) {
            setPostId(state)
            return
        }
        postService.getPostsById(id).then(value => setPostId(value));

    }, [id]);

    return (

        <div>

            {postId && <PostSingle postId={postId}/>}

            <div><Outlet/></div>

        </div>
    );
};

export default PostId;