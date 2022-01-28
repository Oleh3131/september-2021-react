import React, {useReducer} from 'react';

const reducer = (state, action) => {

    switch (action.type) {
        case 'put cat':
            return {...state,catname:state.catname+20}

        case 'put dog':
            return {...state,dogname:state.dogname}
    }

return state
}



const CatsAndDogs = () => {

    const [state, dispatch] = useReducer(reducer, {catname:"",dogname:""});

    function onSubmit_1(e) {
        e.preventDefault()
    }

    function onSubmit_2(e) {
        e.preventDefault()
    }

    function onCatNameChange(e) {
        dispatch(e.target.value)
    }

    function onDogNameChange(e) {
        dispatch(e.target.value)
    }



    return (
        <div>

            <div>{state.catname}</div>
            <div>{state.dogname}</div>


            <div>
                <form onSubmit={onSubmit_1}>
                    <label>Add Cat:<input type="text" name={'catname'} value={'catname'} onChange={onCatNameChange}/></label>
                    <button onClick={() => dispatch({type: 'put cat'})}>Save</button>
                </form>
            </div>

            <div>
                <form onSubmit={onSubmit_2}>
                    <label>Add Dog:<input type="text" name={'dogname'} value={'dogname'} onChange={onDogNameChange}/></label>
                    <button onClick={() => dispatch({type: 'put dog'})}>Save</button>
                </form>
            </div>

        </div>
    );
};

export default CatsAndDogs;