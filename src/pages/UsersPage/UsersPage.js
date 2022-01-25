import React, {useEffect, useState} from 'react';

import {userService} from "../../services/user.service";
import User from "../../components/User/User";
import css from '../../components/User/User.module.css'
import {Outlet} from "react-router-dom";

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {

        userService.getAll().then(value => setUsers(value));

    }, []);

    return (
        <div className={css.usersPage}>
            <div>
                {users.map(value => <User key={value.id} users={value}/>)}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>

    );
};

export default UsersPage;