import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {addValue} from "../../slices/form.slice";
import css from './Form.module.css'

const Form = () => {

    const {handleSubmit, reset, register} = useForm();

    const dispatch = useDispatch();


    const submit = (data) => {
        dispatch(addValue({data}))
        reset();
    }

    return (
        <form className={css.Form} onSubmit={handleSubmit(submit)}>
            <label>Info: <input className={css.Input} type="text" placeholder={'enter value'} {...register('info')}/></label>
            <button>Save</button>
        </form>

    );
};

export default Form;