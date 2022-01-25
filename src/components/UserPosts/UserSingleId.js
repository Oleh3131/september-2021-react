import React from 'react';
import {Link} from "react-router-dom";

import css from '../../pages/UserSinglePage/UserSinglePage.module.css'


const UserSingleId = ({user}) => {

    const {id, name, username, email, address, phone, website, company} = user;

    return (<div>
            <h2>id: {id}</h2>
            <h4>name: {name}</h4>
            <h4>username: {username}</h4>
            <h4>email: {email}</h4>
            <ul>
                <li>address - street: {address.street}</li>
                <li>address - suite: {address.suite}</li>
                <li>address - city: {address.city}</li>
                <li>address - zipcode: {address.zipcode}</li>
                <ul>
                    <li>address - geo - lat: {address.geo.lat}</li>
                    <li>address - geo - lng: {address.geo.lng}</li>
                </ul>
            </ul>
            <h4>phone: {phone}</h4>
            <h4>website: {website}</h4>
            <ul>
                <li>company - name: {company.name}</li>
                <li>company - catchPhrase: {company.catchPhrase}</li>
                <li>company - bs: {company.bs}</li>
            </ul>

            <button className={css.userSingleIdButton}><Link to={`posts`} >Posts</Link></button>

        </div>

    );
};

export default UserSingleId;