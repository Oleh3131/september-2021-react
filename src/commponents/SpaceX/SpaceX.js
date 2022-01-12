import {useEffect, useState} from "react";

import Flying from '../Flying/Flying'

export default function App() {
    const [spaceXList, setSpaceXList] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches')
            .then((response) => {
                return response.json();
            })
            .then(launches => {
                const flights = launches.filter(value => value.launch_year !== '2020');
                setSpaceXList(flights);
            });

    }, [])

    return (
        <div className={'SpaceX'}>

            {spaceXList.map(value => <Flying key={value.mission_name} mission_name={value.mission_name}
                                             launch_year={value.launch_year} photo={value.links.mission_patch_small}/>)}

        </div>


    )
}