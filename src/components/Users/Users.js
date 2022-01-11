import {useEffect, useState} from "react";

import User from '../User/User'

export default function App() {
    let [usersList, setUsersList] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                return response.json();
            })
            .then(value => {
                setUsersList(value)
            });


    },[])


    return (
        <div className={'mainUserBlockTwo'}>
            {usersList.map(user=> <User key={user.id} id={user.id} name={user.name} username={user.username} email={user.email} street={user.address.street} suite={user.address.suite} city={user.address.city} zipcode={user.address.zipcode} lat={user.address.geo.lat} lng={user.address.geo.lng} phone={user.phone} website={user.website} companyname={user.company.name} catchPhrase={user.company.catchPhrase} bs={user.company.bs}/>)}
        </div>

    );
}





