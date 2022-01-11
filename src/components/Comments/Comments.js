import {useEffect, useState} from "react";

import Comment from '../Comment/Comment'

export default function App() {
    let [commentsList, setCommentsList] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then((response) => {
                return response.json();
            })
            .then(value => {
                setCommentsList(value);
            });

    },[]);

    return (
        <div className={'mainCommentBlock'}>
            {commentsList.map(comment=><Comment key={comment.id} id={comment.id} postId={comment.postId} name={comment.name} email={comment.email} body={comment.body}/>)}

        </div>
    )
};
