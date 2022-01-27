import React, {useReducer} from 'react';

import css from "./Counter.module.css"

// сделать три каунтера, как на лекции,  у  каждого свои 3 кнопки (inc, dec, reset), но для всех один useReducer

const reducer = (state,action) => {

    switch (action.type) {

        case 'inc_1':
            return {...state, count_1: state.count_1 + 1};

        case 'dec_1':
            return {...state, count_1: state.count_1 -1};

        case 'reset_1':
            return {...state, count_1: action.payload};

        case 'inc_2':
            return {...state, count_2: state.count_2 + 2};

        case 'dec_2':
            return {...state, count_2: state.count_2 -2};

        case 'reset_2':
            return {...state, count_2: action.payload};

        case 'inc_3':
            return {...state, count_3: state.count_3 + 4};

        case 'dec_3':
            return {...state, count_3: state.count_3 -4};

        case 'reset_3':
            return {...state, count_3: action.payload};

        default:
            throw new Error('You have a problem')
    }
}

const Counter = () => {

    const [state,dispatch] = useReducer(reducer, {count_1: 0, count_2: 2, count_3: 4});

    return (
        <div className={css.All}>

            <div className={css.countFirstOfAll}>

                <div className={css.countFirstNumber}>{state.count_1}</div>

                <div className={css.countFirstButton}>
                    <button onClick={() => {dispatch({type:'inc_1'})}}>INC</button>
                    <button onClick={() => {dispatch({type:'dec_1'})}}>DEC</button>
                    <button onClick={() => {dispatch({type:'reset_1',payload:0})}}>RESET</button>
                </div>

            </div>


            <div className={css.countSecondOfAll}>

                <div className={css.countSecondNumber}>{state.count_2}</div>

                <div className={css.countSecondButton}>
                    <button onClick={() => {dispatch({type:'inc_2'})}}>INC</button>
                    <button onClick={() => {dispatch({type:'dec_2'})}}>DEC</button>
                    <button onClick={() => {dispatch({type:'reset_2',payload:2})}}>RESET</button>
                </div>

            </div>


            <div className={css.countThirdOfAll}>

                <div className={css.countThirdNumber}>{state.count_3}</div>

                <div className={css.countThirdButton}>
                    <button onClick={() => {dispatch({type:'inc_3'})}}>INC</button>
                    <button onClick={() => {dispatch({type:'dec_3'})}}>DEC</button>
                    <button onClick={() => {dispatch({type:'reset_3',payload:4})}}>RESET</button>
                </div>

            </div>

        </div>
    );
};

export default Counter

