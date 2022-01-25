import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams} from "react-router-dom";

import css from './UserSinglePage.module.css'
import {userService} from "../../services/user.service";
import UserSingleId from "../../components/UserPosts/UserSingleId";

const UserSinglePage = () => {

    const [user, setUser] = useState(null);

    const {id} = useParams();
    const {state} = useLocation();

    useEffect(() => {
        if (state) {
            setUser(state)
            return
        }
        userService.getById(id).then(value => setUser(value))

    }, [id]);

    return (

        <div className={css.postsId}>
            {user && <UserSingleId user={user}/>}

            <div><Outlet/></div>

        </div>
    );
};

export default UserSinglePage;