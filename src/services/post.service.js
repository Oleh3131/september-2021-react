import {urls} from "../config/urls";

const getPosts = () => {
    return fetch(urls.posts)
        .then(value => value.json());
};

const getPostsById = (id) => {
    return fetch(`${urls.posts}/${id}`)
        .then(value => value.json());
};

export const postService = {
    getPosts,
    getPostsById
};