import {configureStore} from "@reduxjs/toolkit";

import carReducer from "../slices/car.slice";
import userReducer from "../slices/user.slice";
import postReducer from "../slices/post.slice";
import commentReducer from "../slices/comment.slice";


const store = configureStore({

    reducer: {
        car: carReducer,
        user: userReducer,
        post: postReducer,
        comment: commentReducer
    }
});


export default store;