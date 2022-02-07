import React from 'react';

import css from '../Car.module.css'
import {useDispatch} from "react-redux";
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
                <button onClick={() => dispatch(carToUpdate({car}))}>Update</button>
                <hr/>
        </div>
    );
};

export default Car;