import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {postService} from "../../services/post.service";
import Newpost from "../Newpost/Newpost";
import css from '../../pages/UserSinglePage/UserSinglePage.module.css'


const UserPosts = () => {

    const [userPosts,setUserPosts] = useState([]);

    const {id} = useParams();

    useEffect(() => {

        postService.getPostsofUserById(id).then(value => setUserPosts(value));

    },[id]);


    return (
        <div className={css.userPosts}>

            {userPosts.map(value => <Newpost key={value.id} posts={value}/>) }

        </div>
    );
};

export default UserPosts;
