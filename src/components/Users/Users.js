import React, {useEffect, useState} from 'react';

import {userService} from "../../services/user.servise";
import User from '../User/User'
import MainUser from "../MainUser/MainUser";


const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers(value));
    }, []);

    const [useR, setUser] = useState(null);

    const getUser = (user) => {
        setUser(user);
    };

    return (
        <div>
            { useR && <MainUser useR={useR}/>}
            {users.map(value =>
                <User
                key={value.id}
                user={value}
                getUser={getUser}
            />)}
        </div>
    );
};

export default Users;






