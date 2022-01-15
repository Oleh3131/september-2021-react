import React from 'react';

const Post = ({post}) => {
    const {id,userId,title, body} = post
    return (
        <div>
            <h2>userId:{userId}</h2>
            <h3>id:{id}</h3>
            <p>title:{title}</p>
            <p>body:{body}</p>
        </div>
    );
};

export default Post;

