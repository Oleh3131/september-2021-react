import React from 'react';
import css from "../CatsAndDogs.module.css";

const Dog = ({dog, dispatch}) => {

    const {id, name} = dog

    const deleteDog = () => {
        dispatch({type: 'delelete_Dog', payload: {id}})
    }


    return (
        <div className={css.Dog}>
            <h4>{name}</h4>
            <button onClick={deleteDog}>Delete</button>
        </div>
    );
};

export default Dog;