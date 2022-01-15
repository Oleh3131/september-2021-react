import {urls} from "./urls";


const getPost = () => {
    return fetch(urls.posts)
        .then(value => value.json());

};

const getPostId = (id) => {
    return fetch(`${urls.posts}/${id}`)
        .then(value => value.json())
};

export const postService ={
    getPost,
    getPostId
}