import React from 'react';

const Cat = ({cat,dispatch}) => {

    const {id,name}=cat

    const deleteCat = () => {
        dispatch({type:'delelete_Cat',payload:{id}})
    }

    return (
        <div>
            <h4>{name}</h4>
            <button onClick={deleteCat}>Delete</button>
        </div>
    );
};

export default Cat;