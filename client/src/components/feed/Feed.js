import { useContext, useEffect, useState } from "react";
import Post from "../post/Post"
import Share from "../share/Share"
import "./feed.css"
import axios from 'axios'
// import {Posts} from '../../dummyData'
import { AuthContext } from '../../contexts/AuthContext';

export default function Feed({ username }) {
    const [post, setPost] = useState([]);
    const { user } = useContext(AuthContext)

    useEffect(() => {
        const FetchPosts = async () => {
            const res = username
                ? await axios.get('/posts/profile/' + username)
                : await axios.get('posts/timeline/' + user._id)
            setPost(
                res.data.sort((p1, p2) => {
                    return new Date(p2.createdAt) - new Date(p1.createdAt);
                })

            )

        }
        FetchPosts();
    }, [username, user._id]
    )

    return (
        <div className='feed'>

            <div className="feedContainer">
                {(!username || username === user.username) && < Share />}
                {
                    post.map((p) => (
                        <Post key={p._id} post={p} />
                    ))
                }
            </div>
        </div>
    )
}

