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

export const updateCarById = createAsyncThunk(
    'carSlice/updateCarById',
    async ({id, car}, {dispatch}) => {
        const modernCar = await carService.updateById(id, car);
        dispatch(updateCar({car: modernCar}));
    }
);


const initialState = {
    cars: [],
    status: null,
    error: null,
    carForUpdate: null
}


const carSlice = createSlice({
    name: "carSlice",
    initialState,
    reducers: {
        carToUpdate: (state, action) => {
            state.carForUpdate = action.payload.car;
        },

        updateCar: (state, action) => {
            const index = state.cars.findIndex(car => car.id === action.payload.car.id);
            state.cars[index] = action.payload.car;
            state.carForUpdate = null;
        }

    },
    extraReducers: {
        [getCar.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [getCar.fulfilled]: (state, action) => {
            state.cars = action.payload
        },
        [getCar.rejected]: (state, action) => {
            state.error = action.payload
        }
    }

});



const carReducer = carSlice.reducer;

export const {carToUpdate,updateCar} = carSlice.actions;

export default carReducer;



// che