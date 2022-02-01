import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";


import Car from "../Car/Car";
import {getAllCars} from "../../store/car.slice";

const Cars = () => {
const {cars,status,error} = useSelector(state => state.cars);

// Але state це у нас ще є пусти масив (cars=[]). Але промапити його все ж можна щоб передати в Car.
//         А далі використовуємо useEffect щоб наповнити наш пустий масив данними.

    const dispatch = useDispatch();

    useEffect(()=>{

      dispatch(getAllCars())

        // В нашому випадку ця функція нічого не приймає

    },[])

    return (
        <div>
            {cars.map(value=><Car key={value.id} car={value}/>)}
        </div>
    );
};

export default Cars;