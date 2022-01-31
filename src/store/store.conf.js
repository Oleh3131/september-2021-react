import {configureStore} from '@reduxjs/toolkit'

import carReduser from "./car.slice";


const store = configureStore({
    reducer:{
        carReduser:carReduser
    }
})


export default store