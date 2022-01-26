import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {userService} from "../../services/user.service";
import PhotosList from "./PhotosList";
import css from '../User/User.module.css'

const Photos = () => {

    const [photos,setPhotos] = useState([]);

    const {id} = useParams();

    useEffect(() => {

        userService.getPhotosById(id).then(value => setPhotos(value))

    }, [id]);

    return (
        <div className={css.photos}>
            {photos.map(value => <PhotosList key={value.id} photo={value}/>)}
        </div>
    );
};

export default Photos;