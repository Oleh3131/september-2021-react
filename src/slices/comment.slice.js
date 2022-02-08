import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import commentService from "../service/comment.servise";


export const getComment = createAsyncThunk(
    'commentSlice/getComment',
    async (_,{rejectedWithValue})=>{
        try {
            const newComment = await commentService.getAll();
            return newComment;
        }catch (e) {
            return rejectedWithValue(e.message);
        }
    }
);




const initialState={
    comments:[],
    status:null,
    error: null
}


const commentSlice = createSlice({
    name:'commentSlice',
    initialState,
    reducers:{},
    extraReducers:{
        [getComment.pending]:(state)=>{
            state.status = 'pending';
            state.error = null;
        },
        [getComment.fulfilled]:(state,action)=>{
            state.comments = action.payload;
        },
        [getComment.rejected]:(state,action)=>{
            state.error = action.payload;
        }
    }
});

const commentReducer = commentSlice.reducer;

export default commentReducer;