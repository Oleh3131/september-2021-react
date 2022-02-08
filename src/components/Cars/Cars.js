import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Outlet} from "react-router-dom";

import Car from "../Car/Car";
import {getCar} from "../../slices";
import css from '../Car.module.css'



const Cars = () => {

    const {cars, status, error} = useSelector(state => state.car);

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getCar());

    },[]);

    return (
        <div className={css.Cars}>
            {status === 'pending' && <h2>Download process....</h2>}
            {error && <h2>ERROR.....</h2>}
            <div className={css.CarBlocks}>
                {cars.map(value => <Car key={value.id} car={value}/>)}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default Cars;