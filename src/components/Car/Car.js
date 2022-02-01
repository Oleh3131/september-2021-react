import React from 'react';

const Car = ({car}) => {

    const {id,model,price,year}=car

    return (
        <div>
            <h3>Id :{id}</h3>
            <h4>Model :{model}</h4>
            <h5>Price :{price}</h5>
            <h6>Year :{year}</h6>
        </div>
    );
};

export default Car;