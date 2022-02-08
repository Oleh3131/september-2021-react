import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    formValues: []
}


const formSlice = createSlice({
    name: 'formSlice',
    initialState,
    reducers: {

        addValue: (state, action) => {
            state.formValues.push({
                id: new Date().getTime(),
                ...action.payload.data,
                status:false
            })
        },
        deleteValue: (state, action) => {
            state.formValues = state.formValues.filter(value=>value.id!==action.payload.id)

        }

    },
    extraReducers: {}
});


const formReducer = formSlice.reducer;

export const {addValue, deleteValue} = formSlice.actions;

export default formReducer;
