import {urls} from "../config/urls";

const getPosts = () => {
    return fetch(urls.posts)
        .then(value => value.json());
};

const getPostsById = (id) => {
    return fetch(`${urls.posts}/${id}`)
        .then(value => value.json());
};
const getPostsofUserById = (id) => {
    return fetch(`${urls.users}/${id}/posts`)
        .then(value => value.json());
};

const getCommentsofPostById = (id) => {
    return fetch(`${urls.posts}/${id}/comments`)
        .then(value => value.json());
};


export const postService = {
    getPosts,
    getPostsById,
    getPostsofUserById,
    getCommentsofPostById
};