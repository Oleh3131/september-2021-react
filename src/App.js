import './App.css';

import Users from './components/Users/Users'
import Form from './components/Form/Form'
import {useEffect, useState} from "react";
import {userService} from "./services/user.services";

function App() {

    const [users, setUser] = useState([]);
    const [filtredUsers, setFiltredUser] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => {
            setUser([...value])
            setFiltredUser([...value])
        })
    },[]);


   const getFiltred = (form) => {

       let array = [...users];

       if (form.name) {
           array =array.filter(user=>user.name.toLowerCase().includes(form.name.toLowerCase()))
       }
       if (form.username) {
           array =array.filter(user=>user.username.toLowerCase().includes(form.username.toLowerCase()))
       }
       if (form.email) {
           array =array.filter(user=>user.email.toLowerCase().includes(form.email.toLowerCase()))
       }
       setFiltredUser(array );
   }

    return (
        <div className="App">
            <Form getFiltred={getFiltred}/>
            <Users users={filtredUsers}/>
        </div>
    );
}

export default App;
