import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import css from '../Car.module.css'

const Header = () => {
    return (
        <>
            <div className={css.Header}>
                <NavLink to={'users'}>
                    <button className={css.HeaderButton}>Users</button>
                </NavLink>
                <NavLink to={'posts'}>
                    <button className={css.HeaderButton}>Posts</button>
                </NavLink>
                <NavLink to={'comments'}>
                    <button className={css.HeaderButton}>Comments</button>
                </NavLink>
                <NavLink to={'cars'}>
                    <button className={css.HeaderButton}>Cars</button>
                </NavLink>
            </div>

            <div>
                <Outlet/>
            </div>

        </>

    );
};

export default Header;