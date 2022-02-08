import React from 'react';

const Post = ({post}) => {

    const {id,title,body} = post;

    return (
        <div>
            <h3>Id: {id}</h3>
            <h5>Title: {title}</h5>
            <h5>Body: {body}</h5>
        </div>
    );
};

export default Post;