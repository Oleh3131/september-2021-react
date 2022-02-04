import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import carService from "../service/car.service";


export const getCar = createAsyncThunk(
    'carSlice/getCar',
    async (_, {rejectWithValue}) => {
        try {
            const newCar = await carService.getAll();
            return newCar;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);


const initialState = {
    cars: [],
    status: null,
    error: null
}


const carSlice = createSlice({
    name: "carSlice",
    initialState,
    reducers: {},
    extraReducers: {
        [getCar.pending]: (state) => {
            state.status = 'pending'
            state.error=null
        },
        [getCar.fulfilled]:(state,action)=>{
            state.cars=action.payload
        },
        [getCar.rejected]:(state,action)=>{
            state.error=action.payload
        }
    }

});


const carReducer = carSlice.reducer;


export default carReducer;