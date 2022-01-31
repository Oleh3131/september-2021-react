import React, {useRef} from 'react';

const Form = ({dispatch}) => {

    const CatInput = useRef();
    const DogInput = useRef();


    const submit = (e) => {
        e.preventDefault();
        e.target.reset()
    };

    const clickCat = () => {
        dispatch({type: 'put_Cat', payload: {cats: CatInput.current.value}})
    }

    const clickDog = () => {
        dispatch({type: 'put_Dog', payload: {dogs: DogInput.current.value}})
    }


    return (
        <div>
            <form onSubmit={submit}>
                <label>Only cats: <input type="text" placeholder={'cats'} ref={CatInput}/></label>
                <button onClick={clickCat}>Save</button>
                <label>Only dogs: <input type="text" placeholder={'dogs'} ref={DogInput}/></label>
                <button onClick={clickDog}>Save</button>
            </form>
        </div>
    );
};

export default Form;