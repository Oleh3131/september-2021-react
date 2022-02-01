import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";


import {updateCarById} from "../../store/car.slice";

const Form = () => {

    const {carForUpdate} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    const {handleSubmit, reset, register, setValue} = useForm();



    const submit = (data) => {

        dispatch(updateCarById({id: carForUpdate.id, car: data}))
        reset();

    }



    useEffect(() => {

        if (carForUpdate) {
            setValue('model', carForUpdate.model)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }

    }, [carForUpdate])


    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label>Model: <input type="text" placeholder={'model'} {...register('model')}/></label>
                <label>Price: <input type="text" placeholder={'price'} {...register('price')}/></label>
                <label>Year: <input type="text" placeholder={'year'} {...register('year')}/></label>
                <button>Update</button>
            </form>
        </div>
    );
};

export default Form;