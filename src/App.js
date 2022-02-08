import {Route, Routes} from "react-router-dom";

import './App.css';
import Cars from "./components/Cars/Cars";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import CommentsPage from "./pages/CommentsPage/CommentsPage";


function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Header/>}>
                    <Route path={'users'} element={<UsersPage/>}/>
                    <Route path={'cars'} element={<Cars/>}>
                        <Route path={'form'} element={<Form/>}/>
                    </Route>
                    <Route path={'posts'} element={<PostsPage/>}/>
                    <Route path={'comments'} element={<CommentsPage/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
