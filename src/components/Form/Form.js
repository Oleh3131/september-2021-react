import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {updateCarById} from "../../slices";


const Form = () => {

    const {carForUpdate} = useSelector(state => state.car);

    const {handleSubmit, reset, setValue, register} = useForm();

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
            <label>Price: <input type="text" placeholder={'price'} {...register('price')}/></label>
            <label>Year: <input type="text" placeholder={'year'} {...register('year')}/></label>
            <button>Save</button>
        </form>
    );
};

export default Form;