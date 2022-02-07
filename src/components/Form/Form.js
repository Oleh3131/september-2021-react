import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {joiResolver} from "@hookform/resolvers/joi";

import {updateCarById} from "../../slices";
import CarValidator from "../../validators/car.validator";



const Form = () => {

    const {carForUpdate} = useSelector(state => state.car);

    const {handleSubmit, reset, setValue, register,formState:{errors}} = useForm({resolver:joiResolver(CarValidator),mode:"onTouched"});

    const dispatch = useDispatch();

    const submit = (data) => {
        dispatch(updateCarById({id:carForUpdate.id,car:data}))
        reset();

    }

    useEffect(() => {

        if (carForUpdate) {
            setValue('model', carForUpdate.model);
            setValue('price', carForUpdate.price);
            setValue('year', carForUpdate.year);
        }


    }, [carForUpdate])

    return (
        <form onSubmit={handleSubmit(submit)}>
            <label>Model: <input type="text" placeholder={'model'} {...register('model')}/></label>
            {errors.model && <span>{errors.model.message}</span>}
            <label>Price: <input type="text" placeholder={'price'} {...register('price')}/></label>
            {errors.price && <span>{errors.price.message}</span>}
            <label>Year: <input type="text" placeholder={'year'} {...register('year')}/></label>
            {errors.year && <span>{errors.year.message}</span>}
            <button>Save</button>
        </form>
    );
};

export default Form;