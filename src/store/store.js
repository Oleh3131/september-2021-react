import {configureStore} from "@reduxjs/toolkit";
import carReducer from "../slices/car.slice";


const store = configureStore({

    reducer:{
        car:carReducer
    }

});


export default store;