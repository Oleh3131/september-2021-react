import {urls} from "../config/urls";

const getComments = () => {
  return fetch (urls.comments)
      .then (value => value.json())
}

const getCommentsById = (id) => {
    return fetch(`${urls.comments}/${id}`)
        .then(value => value.json());
};

export const commentService = {
    getComments,
    getCommentsById
}