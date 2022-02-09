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

        changeStatus:(state,action)=>{
            const find = state.formValues.find(formValues => formValues.id === action.payload.id);
            find.status = !find.status;
        },

        deleteValue: (state, action) => {
            state.formValues = state.formValues.filter(value=>value.id!==action.payload.id)

        }

    },
    extraReducers: {}
});


const formReducer = formSlice.reducer;

export const {addValue, deleteValue,changeStatus} = formSlice.actions;

export default formReducer;
