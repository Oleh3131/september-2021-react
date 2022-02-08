import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import User from "../../components/User/User";
import {getUser} from "../../slices/user.slice";
import css from '../../components/Car.module.css'


const UsersPage = () => {

    const {users,status,error} = useSelector(state => state.user);

    const dispatch = useDispatch();

    useEffect(()=>{

        dispatch(getUser());

    },[])

    return (
        <div className={css.UsersBlock}>
                {status === 'pending' && <h2>Download process....</h2>}
                {error && <h2>ERROR.....</h2>}
            <div className={css.mainUsers}>
                {users.map(user=><User key={user.id} user={user}/>)}
            </div>
        </div>
    );
};

export default UsersPage;