import React, {useEffect, useState} from 'react';
import {carService} from "../../services/car.service";
import Car from "../Car/Car";

const Cars = ({trigger}) => {

    const [cars,setCars] = useState([]);
    useEffect(() => {

        carService.getAll().then(value => setCars([...value]))

        // може бути що нездалий запит,
        // або помилка,
        // або прийти null
        // або взагалі немає такої URL
        // то в такому випадку при деструкторизації нам прийде хоч пустий масив
        // (ми перестраховуємося [...value])


    },[trigger]);


    return (
        <div>
            {cars.map(value => <Car key={value.id} car={value}/>)}
        </div>
    );
};

export default Cars;