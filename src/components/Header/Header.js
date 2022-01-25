import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import css from './Header.module.css'

const Header = () => {
    return (
        <>
            <div className={css.header}>
                <NavLink to='users'>
                    <button className={css.usersButton}>Users</button>
                </NavLink>
                <NavLink to='posts'>
                    <button className={css.postsButton}>Posts</button>
                </NavLink>
            </div>

            <div className={css.outlet}>
                <Outlet/>
            </div>


        </>


    )

};

export default Header;