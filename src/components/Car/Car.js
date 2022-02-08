import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

import css from '../Car.module.css'
import {carToUpdate} from "../../slices";


const Car = ({car}) => {

    const {id, model, price, year} = car

    const dispatch = useDispatch();

    return (
        <div className={css.Car}>
                <ul>
                    <li>Id: {id}</li>
                    <li>Model: {model}</li>
                    <li>Price: {price}</li>
                    <li>Year: {year}</li>
                </ul>
            <Link to={'form'}>
                <button className={css.carButton} onClick={() => dispatch(carToUpdate({car}))}>Update</button>
            </Link>
                <hr/>
        </div>
    );
};

export default Car;