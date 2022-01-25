import React from 'react';

const Newpost = ({posts}) => {
    const {id,userId,title,body}=posts
    return (
            <div >
                <h2>id: {id}</h2>
                <h4>userId: {userId}</h4>
                <p>title: {title}</p>
                <p>body: {body}</p>
            </div>
    );
};

export default Newpost;