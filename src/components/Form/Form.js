import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {addValue} from "../../slices/form.slice";

const Form = () => {

    const {handleSubmit, reset, register} = useForm();

    const dispatch = useDispatch();


    const submit = (data) => {
        dispatch(addValue({data}))
        reset();
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <label>Info: <input type="text" placeholder={'to do'} {...register('info')}/></label>
            <button>Save</button>
        </form>
    );
};

export default Form;