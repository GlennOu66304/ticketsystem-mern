import React from 'react'
import './chatOnline.css'
export default function ChatOnline() {
    return (
        <div className="chatOnline">
            <div className="chatOnlineFriend">
                <div className="chatOnlineImgContainer">
                    <img className="chatOnlineImg" src='http://imagebed1.oss-cn-hongkong.aliyuncs.com/uPic/ZJ4rX3.jpg' alt='' />
                    <div className="chatOnlineBadge"></div>
                </div>
                <span className="chatOnlineName">John Doe</span>
            </div>

            <div className="chatOnlineFriend">
                <div className="chatOnlineImgContainer">
                    <img className="chatOnlineImg" src='http://imagebed1.oss-cn-hongkong.aliyuncs.com/uPic/ZJ4rX3.jpg' alt='' />
                    <div className="chatOnlineBadge"></div>
                </div>
                <span className="chatOnlineName">John Doe</span>
            </div>

            <div className="chatOnlineFriend">
                <div className="chatOnlineImgContainer">
                    <img className="chatOnlineImg" src='http://imagebed1.oss-cn-hongkong.aliyuncs.com/uPic/ZJ4rX3.jpg' alt='' />
                    <div className="chatOnlineBadge"></div>
                </div>
                <span className="chatOnlineName">John Doe</span>
            </div>

        </div>
    )
}
