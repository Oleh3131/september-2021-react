import React from 'react';

const Comment = ({comment}) => {

    const {id,name,email,body} = comment;

    return (
        <div>
            <h3>Id: {id}</h3>
            <h5>Name: {name}</h5>
            <p>Email: {email}</p>
            <p>Body: {body}</p>
        </div>
    );
};

export default Comment;