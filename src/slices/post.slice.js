import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {postService} from "../service";


export const getPost = createAsyncThunk(
    'postSlice/getPost',
    async (_,{rejectedWithValue})=>{
        try {
            const newPost = await postService.getAll();
            return newPost;
        }catch (e) {
            return rejectedWithValue(e.message);
        }
    }
);


const initialState={
    posts: [],
    status:null,
    error: null
}


const postSlice = createSlice({
    name:'postSlice',
    initialState,
    reducers:{},
    extraReducers:{
        [getPost.pending]:(state)=>{
            state.status = 'pending';
            state.error = null;
        },
        [getPost.fulfilled]:(state,action)=>{
            state.posts=action.payload
        },
        [getPost.rejected]:(state,action)=>{
            state.error = action.payload;
        }
    }
});

const postReducer = postSlice.reducer;

export default postReducer;