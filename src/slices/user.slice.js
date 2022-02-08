import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import userService from "../service/user.service";


export const getUser = createAsyncThunk(
    'userSlice/getUser',
    async (_, {rejectedWithValue}) => {
        try {
            const newUser = await userService.getAll();
            return newUser;
        } catch (e) {
            return rejectedWithValue(e.message);
        }

    }
);


const initialState = {
    users: [],
    status: null,
    error: null,
}


const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
    extraReducers: {
        [getUser.pending]: (state) => {
            state.status = 'pending';
            state.error = null;
        },
        [getUser.fulfilled]: (state, action) => {
            state.users = action.payload;
        },
        [getUser.rejected]: (state, action) => {
            state.error = action.payload;
        }
    }
});


const userReducer = userSlice.reducer;

export default userReducer;