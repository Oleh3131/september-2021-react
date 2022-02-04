import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import Car from "../Car/Car";
import {getCar} from "../../slices";


const Cars = () => {

    const {cars,status,error} = useSelector(state => state.car);

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getCar());

    });

    return (
        <div>
            {status==='pending' && <h2>Download process....</h2>}
            {error && <h2>ERROR.....</h2>}
            {cars.map(value=><Car key={value.id} car={value}/>)}
        </div>
    );
};

export default Cars;