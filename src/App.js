import {Routes, Route} from "react-router-dom";

import './App.css';
import Header from "./components/Header/Header";
import UsersPage from './pages/UsersPage/UsersPage'
import PostsPage from './pages/PostsPage/PostsPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Header/>}>
                    <Route path={'users'} element={<UsersPage/>}/>
                    <Route path={'posts'} element={<PostsPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
