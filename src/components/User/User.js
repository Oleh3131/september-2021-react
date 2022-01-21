import React from 'react';

import '../Users/Users.css'

const User = ({user}) => {
    const {id,name, username, email} = user;
    return (
            <div className={'UserProperties'}>

                {id}) name:{name} --- username:{username} --- email:{email}

            </div>
    );
};

export default User;