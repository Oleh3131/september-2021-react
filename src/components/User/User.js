import React from 'react';
import {Link} from "react-router-dom";

import css from './User.module.css'

const User = ({users}) => {

    const {id, name} = users;

    return (
        <div className={css.toBlocks}>
            <div className={css.user}>
                <Link to={id.toString()} state={users}>{id}) {name}
                    <button className={css.userButton}>User</button>
                </Link>
            </div>
            <div className={css.buttonToAlbums}>
                <Link to={id.toString()+'/albums'}>
                    <button className={css.albumsButton}>Albums</button>
                </Link>
            </div>
        </div>
    );
};

export default User;