import React, {useReducer} from 'react';

import Form from './Form/Form';
import Cats from './Cats/Cats';
import Dogs from './Dogs/Dogs'

const reducer = (state, action) => {
    switch (action.type) {
        case "put_Cat":
            return {...state, catname: [...state.catname, {id: Math.floor(Math.random() * Math.floor(Math.random() * Date.now())), name: action.payload.cats}]}

        case 'put_Dog':
            return {...state, dogname: [...state.dogname, {id: Math.floor(Math.random() * Math.floor(Math.random() * Date.now())), name: action.payload.dogs}]}

        case 'delelete_Cat':
            return {...state,catname:state.catname.filter(cat =>cat.id!==action.payload.id ) }

        case 'delelete_Dog':
            return {...state,dogname:state.dogname.filter(dog =>dog.id!==action.payload.id ) }

default:
    return state
    }
};


const CatsAndDogs = () => {

    const [state, dispatch] = useReducer(reducer, {catname: [], dogname: []})


    return (
        <div>
            <Form dispatch={dispatch}/>
            <Cats state={state} dispatch={dispatch}/>
            <Dogs state={state} dispatch={dispatch}/>
        </div>
    );
};

export default CatsAndDogs;