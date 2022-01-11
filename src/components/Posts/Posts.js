import {useEffect, useState} from "react";

import Post from '../Post/Post'

export default function App() {
    let [postsList,setPostsList] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then((response) => {
            return response.json();
          })
          .then(value => {
              setPostsList(value);
          });

    },[])

    return (
        <div className={'mainPostBlockTwo'}>
            {postsList.map(post=><Post key={post.id} id={post.id} userId={post.userId} title={post.title} body={post.body} />)}
        </div>

    );


};