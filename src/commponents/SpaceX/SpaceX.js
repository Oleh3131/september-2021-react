import {useEffect, useState} from "react";

import Flying from '../Flying/Flying'

export default function App() {
    let [spaceXList, setSpaceXList] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches')
            .then((response) => {
                return response.json();
            })
            .then(launches => {
                setSpaceXList(launches);
            });
    }, [])
    return (
        <div className={'SpaceX'}>
            {spaceXList.map(value => {
                    if (value.launch_year !== '2020') {

                        return (<Flying key={value.mission_name} mission_name={value.mission_name}
                                        launch_year={value.launch_year} photo={value.links.mission_patch_small}/>)
                    }
                }
            )}

        </div>


    )
}