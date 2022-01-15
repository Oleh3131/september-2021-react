import './App.css';

import Users from './components/Users/Users'
import Posts from './components/Posts/Posts'
import {useState} from "react";


function App() {
    const [userId, serUserId] = useState(null);

    const getUserId = (id) => {

        serUserId(id);

    };


    return (
        <div className="App">

            <Users getUserId={getUserId}/>

            {userId && <Posts userId={userId}/>}

        </div>
    );
}

export default App;
