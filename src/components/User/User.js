const User = (props)=> {
    const {id, name, username, email, street,suite,city,zipcode,lat,lng, phone, website, companyname,catchPhrase,bs} = props;

    return(
        <div>
            <h2>id:{id}</h2>
            <h3>name:{name}</h3>
            <h3>username:{username}</h3>
            <h4>email:{email}</h4>
            <h4>street:{street}</h4>
            <h4>suite:{suite}</h4>
            <h4>city:{city}</h4>
            <h4>zipcode:{zipcode}</h4>
            <h4>lat:{lat}</h4>
            <h4>lng:{lng}</h4>
            <h4>phone:{phone}</h4>
            <h4>website:{website}</h4>
            <h4>companyname:{companyname}</h4>
            <h4>catchPhrase:{catchPhrase}</h4>
            <h4>bs:{bs}</h4>
        </div>
    )
}



export default User;