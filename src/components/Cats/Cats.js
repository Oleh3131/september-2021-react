import React from 'react';
import Cat from "../Cat/Cat";

const Cats = ({state,dispatch}) => {

     const {catname}=state

    return (
        <div>
            {catname.map(value=> <Cat key={value.id} cat={value} dispatch={dispatch}/>)}
        </div>
    );
};

export default Cats;