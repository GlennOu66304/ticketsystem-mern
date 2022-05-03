import Online from "../online/Online"
import "./rightBar.css"
import { Users } from '../../dummyData'
import axios from 'axios'
import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom";
import { Add, Remove } from "@material-ui/icons";
import { AuthContext } from '../../contexts/AuthContext';
export default function RightBar({ user }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const [friends, setFriends] = useState([]);
    const { user: currentUser, dispatch } = useContext(AuthContext)
    const [followed, setFollowed] = useState(currentUser.followings.includes(user?.id));


    useEffect(() => {

        setFollowed(currentUser.followings.includes(user?.id))
    }, [currentUser, user])



    useEffect(() => {
        const getFriends = async () => {
            try {
                const friendList = await axios.get("/users/friends/" + user._id);
                setFriends(friendList.data);
            } catch (err) {
                console.log(err)
            }

        }
        getFriends();
    }, [user]);

    const handleClick = async () => {
        try {
            if (followed) {
                await axios.put("/users/" + user._id + "/unfollow", {
                    userId: currentUser._id
                })
                dispatch({
                    type: 'UNFOLLOW', payload: user._id
                })
            } else {
                await axios.put("/users/" + user._id + "/follow", {
                    userId: currentUser._id
                })
                dispatch({
                    type: 'FOLLOW', payload: user._id
                })
            }

        }
        catch (err) {
            console.log(err)
        }
        setFollowed(!followed)
    }

    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img className='birthdayImg' src={PF + 'gift.png'} alt='' />
                    <span className="birthdayText">
                        <b>Pola Foster</b> and
                        <b> 3 other friends</b>  have a birthday today.
                    </span>
                </div>
                <img className='rightbarAd' src={PF + 'ad.png'} alt='' />
                <h4 className="rightbarTitle">Online Frineds</h4>
                <ul className="rightbarFriendList">
                    {
                        Users.map((u) => (
                            <Online key={u.id} user={u} />
                        ))
                    }
                </ul>
            </>
        )
    }

    const ProfileRightbar = () => {
        const PF = process.env.REACT_APP_PUBLIC_FOLDER
        return (
            <>
                {user.username !== currentUser && (
                    <button className="rightbarFollowButton" onClick={handleClick}>
                        {followed ? "unfollow" : "Follow"}
                        {followed ? <Remove /> : <Add />}

                    </button>
                )}
                <h4 className="rightbarTitle"> User Information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfovalue">{user.city}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfovalue">{user.from}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfovalue">{user.relationship === 1 ? "Single" : user.relationship === 2 ? "Married" : ""}</span>
                    </div>
                </div>
                <h4 className="rightbarTitle"> User Friends</h4>
                <div className="rightbarFollowings">

                    {friends.map((friend) => (
                        <Link to={'/profile/' + friend.username} style={{ textDecoration: "none" }}>
                            <div className="rightbarfollowing">
                                <img src={friend.profilePicture ? PF + friend.profilePicture : PF + 'person/noAvatar.png'} alt="" className="rightbarFollowingImg" />
                                <span className="rightbarFollowingName"> {friend.username}</span>
                            </div>
                        </Link>
                    ))}

                </div>
            </>
        )
    }

    return (
        <div className='rightBar'>
            <div className="rightBarWrapper">
                {user ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    )
}
