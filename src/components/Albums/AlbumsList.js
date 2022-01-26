import React from 'react';
import {Link} from "react-router-dom";

import css from "../User/User.module.css";

const AlbumsList = ({albums}) => {

    const {id,userId,title}=albums

    return (
        <div className={css.albumsDetails}>
            <h2>id: {id}</h2>
            <h4>userId: {userId}</h4>
            <p>title: {title}</p>

            <Link to={id.toString()+'/photos'}>
                <button className={css.photosButton}>User</button>
            </Link>
        </div>
    );
};

export default AlbumsList;