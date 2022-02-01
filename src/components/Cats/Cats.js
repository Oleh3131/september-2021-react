import React from 'react';

import Cat from "../Cat/Cat";
import css from '../CatsAndDogs.module.css'

const Cats = ({state, dispatch}) => {

    const {catname} = state

    return (
        <div className={css.mainCats}>
            {catname.map(value => <Cat key={value.id} cat={value} dispatch={dispatch}/>)}
        </div>
    );
};

export default Cats;