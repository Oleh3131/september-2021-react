import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import Comment from "../../components/Comment/Comment";
import {getComment} from "../../slices/comment.slice";
import css from "../../components/Car.module.css";

const CommentsPage = () => {

    const {comments,status,error} = useSelector(state => state.comment);

    const dispatch = useDispatch();

    useEffect(()=>{

        dispatch(getComment())

    },[])

    return (
        <div className={css.CommentsBlock}>
            {status==='pending' &&  <h2>Download process....</h2>}
            {error && <h2>ERROR.....</h2>}
            <div className={css.mainComments}>
                {comments.map(comment=><Comment key={comment.id} comment={comment}/>)}
            </div>
        </div>
    );
};

export default CommentsPage;