import React from 'react';
import {useDispatch} from "react-redux";

import {changeStatus, deleteValue} from "../../slices/form.slice";
import css from '../Form.module.css'


const Value = ({value}) => {

    const {id,info,status}=value

    const dispatch = useDispatch();

    return (
        <div>
            <div className={css.changeStatus}>
                <input type="checkbox" name={'status'} value={status} onChange={()=>dispatch(changeStatus({id}))} />
                <h2 className={status? css.completed:''}>{info}</h2>
                <button onClick={()=>dispatch(deleteValue({id}))}>Delete</button>
            </div>

        </div>

    );
};

export default Value;