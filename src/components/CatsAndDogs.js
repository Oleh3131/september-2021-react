import React, {useReducer} from 'react';

import Cat from "./Cat/Cat";


const reducer = (state, action) => {

    switch (action.type) {
        case 'putName':
            return {...state, [action.field]: action.payload}
        default:
            return state
    }
}


const CatsAndDogs = () => {

    const [state, dispatch] = useReducer(reducer, {catname: "", dogname: ""});

    function onSubmit_1(e) {
        e.preventDefault()
    }

    function onSubmit_2(e) {
        e.preventDefault()
    }


    const onNameChange = (e) => {
        dispatch({
            type: 'putName',
            field: e.target.name,
            payload: e.target.value
        });

    }


    return (
        <div>

            <div>
                <form onSubmit={onSubmit_1}>
                    <label>Add Cat:<input type="text" name={'catname'} value={state.catname}
                                          onChange={onNameChange}/></label>
                    <button>Save</button>
                </form>
            </div>

            <div>
                <form onSubmit={onSubmit_2}>
                    <label>Add Dog:<input type="text" name={'dogname'} value={state.dogname}
                                          onChange={onNameChange}/></label>
                    <button>Save</button>
                </form>
            </div>

            <div>{state.catname}</div>
            <div>{state.dogname}</div>

        </div>
    );
};

export default CatsAndDogs;