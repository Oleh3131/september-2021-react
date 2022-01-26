import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";

import {userService} from "../../services/user.service";
import AlbumsList from './AlbumsList'
import css from "../User/User.module.css";

const Albums = () => {

    const [albums, setAlbums] = useState([]);

    const {id} = useParams();

    useEffect(() => {

        userService.getAlbumsById(id).then(value => setAlbums(value))

    },[id]);

    return (
        <div className={css.albums}>

            {albums.map(value => <AlbumsList key={value.id} albums={value}/>)}

            <div><Outlet/></div>

        </div>
    );
};

export default Albums;