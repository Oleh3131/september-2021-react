import React from 'react';
import Dog from "../Dog/Dog";

const Dogs = ({state,dispatch}) => {

    const {dogname}=state

    return (
        <div>
            {dogname.map(value=><Dog key={value.id} dog={value} dispatch={dispatch}/>)}
        </div>
    );
};

export default Dogs;