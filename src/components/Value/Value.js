import React from 'react';
import {useDispatch} from "react-redux";

import {deleteValue} from "../../slices/form.slice";
import css from '../Form.module.css'


const Value = ({value}) => {


    const {id,info,status}=value


    const dispatch = useDispatch();



    return (
        <div>
            <div className={css.changeStatus}>
                <input type="checkbox" name={'status'} value={status} onChange={()=>dispatch(deleteValue({id}))} />
                <h2 className={css.completed}>{info}</h2>
            </div>
            <button onClick={()=>dispatch(deleteValue({id}))}>Delete</button>
        </div>

    );
};

export default Value;