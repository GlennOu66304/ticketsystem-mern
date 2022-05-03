import React, { useEffect, useState } from 'react'
import './profile.css'
import TopBar from '../../components/topBar/TopBar'
import SideBar from '../../components/sideBar/SideBar'
import Feed from '../../components/feed/Feed'
import RightBar from '../../components/rightBar/RightBar'
import axios from 'axios'
import { useParams } from "react-router-dom";

export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const [user, setUser] = useState({});
    const username = useParams().username




    useEffect(() => {
        const FetchUser = async () => {
            const res = await axios.get(`/users/?username=${username}`)
            setUser(res.data)
        }
        FetchUser()
    }, [username])
    return (
        <>
            <TopBar />
            <div className='profile'>
                <SideBar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className='profileCoverImg' src={user.coverPicture ? PF + user.coverPicture : PF + "person/noCover.png"} alt='' />
                            <img className='profileUserImg' src={user.profilePicture ? PF + user.profilePicture : PF + "person/noAvatar.png"} alt='' />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">{user.username}</h4>
                            <span className="profileInfoDesc">{user.desc}</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed username={username} />
                        <RightBar user={user} />
                    </div>
                </div>
            </div>
        </>
    )
}
