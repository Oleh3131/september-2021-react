import React from 'react';
import {useDispatch} from "react-redux";
import {carToUpdate} from "../../store/car.slice";

const Car = ({car}) => {

    const {id, model, price, year} = car

    const dispatch = useDispatch();


    return (
        <div>
            <h3>Id :{id}</h3>
            <h4>Model :{model}</h4>
            <h5>Price :{price}</h5>
            <h6>Year :{year}</h6>
            <button onClick={()=>dispatch(carToUpdate({car}))}>Update</button>
        </div>
    );
};

export default Car;