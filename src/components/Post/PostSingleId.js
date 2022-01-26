import {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {postService} from "../../services/post.service";
import PostSingleIdComments from "./PostSingleIdComments";
import css from '../../components/PostId/Post.module.css'

const PostSingleId = () => {

    const [postSingleId, setPostSingleId] = useState([]);

    const {id} = useParams();

    useEffect(() => {

        postService.getCommentsofPostById(id).then(value => setPostSingleId(value))

    }, [id]);

    return (
        <div className={css.allComments}>
            {postSingleId.map(value => <PostSingleIdComments key={value.id} comment={value}/>)}
        </div>
    );
};

export default PostSingleId;