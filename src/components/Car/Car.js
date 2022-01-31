import React from 'react';
import {useDispatch} from "react-redux";
import {deleteCarNew} from "../../store";

const Car = ({car}) => {

    const dispatch = useDispatch();

    const {id, model, price, year} = car

    return (
        <div style={{display:'flex',justifyContent:'center', alignItem:'center',margin:'20px',gap:"20px"}}>
            <div>
                <div>Model: {model}</div>
                <div>Price: {price}</div>
                <div>Year: {year}</div>
            </div>
            <button onClick={()=>dispatch(deleteCarNew({id}))}>Delete</button>
        </div>
    );
};

export default Car;