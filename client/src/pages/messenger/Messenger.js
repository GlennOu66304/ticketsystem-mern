import React from 'react'
import { useEffect, useContext, useState, useRef } from "react";
import './messenger.css'
import TopBar from '../../components/topBar/TopBar'
import Conversation from '../../components/conversations/Conversation'
import Message from '../../components/message/Message'
import ChatOnline from '../../components/chatOnline/ChatOnline'
import axios from 'axios'
import { AuthContext } from '../../contexts/AuthContext';

export default function Messenger() {
    const [conversation, setConversation] = useState([]);
    const { user } = useContext(AuthContext)
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessages, setNewMessages] = useState([]);
    const scrollRef = useRef()

    useEffect(() => {
        const getConversations = async () => {
            const res = await axios.get('/conversation/' + user._id)
            setConversation(res.data)
            // console.log(res)
        }
        getConversations();
    }, [user._id])

    useEffect(() => {
        const getMessages = async () => {
            try {
                const res = await axios.get("/message/" + currentChat?._id)
                setMessages(res.data);
                console.log(res)
            } catch (err) {
                console.log(err)
            }
        }
        getMessages();
    }, [currentChat])

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])

    console.log(user)
    console.log(currentChat)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const Message = {
            sender: user._id,
            conversationId: currentChat._id,
            text: newMessages
        }

        try {
            const res = await axios.post("/message", Message)
            setMessages([...messages, res.data])
            setNewMessages("")

        } catch (err) {
            console.log(err)
        }
    }
    return (
        <>
            <TopBar />
            <div className="messenger">
                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                        <input className='chatMenuInput' placeholder="search for friends" />
                        {
                            conversation.map((c) => (
                                <div onClick={() => setCurrentChat(c)

                                }>
                                    <Conversation key={c._id} conversation={c} currentUser={user} />
                                </div>
                            ))
                        }

                    </div>
                </div>
                <div className="chatBox">
                    <div className="chatBoxWrapper">
                        {currentChat ?
                            (<>
                                <div className="chatBoxTop">

                                    {messages.map((m) => (
                                        <div ref={scrollRef}>
                                            <Message key={m._id} message={m} own={m.sender === user._id} />
                                        </div>
                                    ))}
                                </div>
                                <div className="chatBoxBottom">
                                    <textarea placeholder='write something......' className="chatMessageInput"
                                        onChange={(e) => setNewMessages(e.target.value)}></textarea>
                                    <button type="text" className="chatSubmitbutton" onClick={handleSubmit}>Send</button>
                                </div>
                            </>) : (
                                <span className="noConversationText">open a conversation to start a chat</span>
                            )}


                    </div>
                </div>

                <div className="chatOnline">
                    <div className="chatOnlineWrapper">
                        <ChatOnline />
                    </div>

                </div>



            </div>
        </>

    )
}
