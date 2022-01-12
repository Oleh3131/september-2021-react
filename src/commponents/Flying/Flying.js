import React from 'react';

const Flying = (props) => {

    const {mission_name,launch_year,photo} = props;

    return (
        <div className={'ShuttleLaunches'}>

            <div className={'Blocks'}>
                <h2>mission name:{mission_name}</h2>
                <h5>launch year:{launch_year}</h5>
            </div>


            <div className={'img'}>
                <img src={photo} alt={"mission name"}/>
            </div>

        </div>
    );
};

export default Flying;