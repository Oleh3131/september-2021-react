import React from 'react';

import css from '../Car.module.css'

const Car = ({car}) => {

    const {id,model,price,year}=car

    return (
        <div className={css.Car}>
            <ul>
                <li>Id: {id}</li>
                <li>Model: {model}</li>
                <li>Price: {price}</li>
                <li>Year: {year}</li>
                <hr/>
            </ul>
        </div>
    );
};

export default Car;