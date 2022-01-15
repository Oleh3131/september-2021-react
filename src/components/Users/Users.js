import React, {useEffect, useState} from 'react';

import {userService} from "../../services/user.servise";
import User from '../User/User'
import MainUser from "../MainUser/MainUser";

import './Users.css';
import './MainUser.css';
import '../User/User.css';


const Users = ({getUserId}) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers(value));
    }, []);

    const [useR, setUser] = useState(null);

    const getUser = (user) => {
        setUser(user);
    };

    return (
        <div className={'Users'}>
            <div className={'mainUser'}>
                {users.map(value => <User key={value.id} user={value} getUser={getUser}/>)}
            </div>
            <div className={'getUser'}>
                {useR && <MainUser useR={useR} getUserId={getUserId}/>}
            </div>

        </div>
    );
};

export default Users;






