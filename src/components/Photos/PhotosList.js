import React from 'react';

import css from '../User/User.module.css'

const PhotosList = ({photo}) => {

    const {id, albumId, title, url} = photo

    return (
        <div>
            <div>
                <h2>id: {id}</h2>
                <h4>albumId: {albumId}</h4>
                <p>title: {title}</p>
            </div>
            <div className={css.img}>
                <img src={url} alt={'albom'}/>
            </div>

        </div>
    );
};

export default PhotosList;