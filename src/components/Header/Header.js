import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import css from './Header.module.css'

const Header = () => {
    return (
        <>
            <div className={css.header}>
                <NavLink to='users'>
                    <button>Users</button>
                </NavLink>
                <NavLink to='posts'>
                    <button>Posts</button>
                </NavLink>
            </div>

            <div className={css.outlet}>
                <Outlet/>
            </div>


        </>


    )

};

export default Header;