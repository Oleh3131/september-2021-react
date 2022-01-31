import React from 'react';

const Dog = ({dog,dispatch}) => {

    const {id,name}=dog

    const deleteDog = () => {
        dispatch({type:'delelete_Dog',payload:{id}})
    }


    return (
        <div>
            <h4>{name}</h4>
            <button onClick={deleteDog}>Delete</button>
        </div>
    );
};

export default Dog;