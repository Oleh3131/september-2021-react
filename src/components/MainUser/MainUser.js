import React from 'react';

const MainUser = ({useR}) => {
    const {id, name, username, email, address, phone, website, company} = useR;
    return (
        <div>
            <h2>id:{id}</h2>
            <h4>name:{name}</h4>
            <h4>username:{username}</h4>
            <h4>email:{email}</h4>
            <h5>street:{address.street}</h5>
            <h5>suite:{address.suite}</h5>
            <h5>city:{address.city}</h5>
            <h6>zipcode:{address.zipcode}</h6>
            <h6>geo lat:{address.geo.lat}</h6>
            <h6>geo lng:{address.geo.lng}</h6>
            <h4>phone:{phone}</h4>
            <h4>website:{website}</h4>
            <h5>company name:{company.name}</h5>
            <h5>company catchPhrase:{company.catchPhrase}</h5>
            <h5>company bs:{company.bs}</h5>
            <button>Get Posts</button>
        </div>
    );
};

export default MainUser;