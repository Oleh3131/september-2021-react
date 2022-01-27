import {Routes, Route} from "react-router-dom";

import './App.css';
import Header from "./components/Header/Header";
import UsersPage from './pages/UsersPage/UsersPage'
import PostsPage from './pages/PostsPage/PostsPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import UserSinglePage from "./pages/UserSinglePage/UserSinglePage";
import UserPosts from "./components/UserPosts/UserPosts";
import PostId from "./components/PostId/PostId";
import PostSingleId from "./components/Post/PostSingleId";
import Albums from "./components/Albums/Albums";
import Photos from "./components/Photos/Photos";

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Header/>}>
                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id/albums'} element={<Albums/>}>
                            <Route path={'photos'} element={<Photos/>}/>
                        </Route>
                        <Route path={':id'} element={<UserSinglePage/>}>
                            <Route path={'posts'} element={<UserPosts/>}/>
                        </Route>
                    </Route>
                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<PostId/>}>
                            <Route path={'comments'} element={<PostSingleId/>}/>
                            </Route>
                        </Route>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
