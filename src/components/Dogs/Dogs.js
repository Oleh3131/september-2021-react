import React from 'react';

import Dog from "../Dog/Dog";
import css from "../CatsAndDogs.module.css";

const Dogs = ({state, dispatch}) => {

    const {dogname} = state

    return (
        <div className={css.mainDogs}>
            {dogname.map(value => <Dog key={value.id} dog={value} dispatch={dispatch}/>)}
        </div>
    );
};

export default Dogs;