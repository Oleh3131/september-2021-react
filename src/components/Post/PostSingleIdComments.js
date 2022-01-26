import React from 'react';

const PostSingleIdComments = ({comment}) => {

    const {id, postId, name, email, body} = comment;

    return (
        <div>
            <h2>id: {id}</h2>
            <h4>postId: {postId}</h4>
            <p>name: {name}</p>
            <p>email: {email}</p>
            <p>body: {body}</p>
        </div>
    );
};

export default PostSingleIdComments;