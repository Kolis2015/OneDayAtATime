import React, { useState, useEffect } from "react";
import axios from "axios";
//import { navigate } from '@reach/router';
import Cookies from 'js-cookie';
import { navigate } from "@reach/router";

const Postblog = () => {
    useEffect(() => {
        axios.post("http://localhost:8000/api/User/isLoggedIn", {},
            {
                // this will force the sending of the credentials / cookies so they can be updated
                //    XMLHttpRequest from a different domain cannot set cookie values for their own domain 
                //    unless withCredentials is set to true before making the request
                withCredentials: true
            })
            .then((res) => {
                console.log(res.cookie);
                console.log(res);
                console.log(res.data, 'is res data!');
                const isLoggedIn = res.data;
                if (!isLoggedIn) {
                    navigate("/Login");
                }
            })
            .catch(err => {
                console.log(err.response);
            });
    })

    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [nickname, setNickname] = useState("");
    const saveBlogPost = () => {
        // save the blog post
        const cookieData = document.cookie
            .split('; ')
            .find(row => row.startsWith('usertoken='))
            .split('=')[1];
        axios.post("http://localhost:8000/api/Blog", {
            UserID: cookieData,
            Title: title,
            Text: text,
            Date: new Date(),
            Nickname:nickname
        },
            {
                // this will force the sending of the credentials / cookies so they can be updated
                //    XMLHttpRequest from a different domain cannot set cookie values for their own domain 
                //    unless withCredentials is set to true before making the request
                withCredentials: true
            })
            .then((res) => {
                console.log(res.cookie);
                console.log(res);
                console.log(res.data, 'is res data!');
                return res.data;
            })
            .catch(err => {
                console.log(err.response);
            });

        // navigate to another page
        
        window.location.href = '/BlogPage';
    };
    return (
        <div>
            <h2>Submit Your blog!</h2>
            <img src="Postblog_Background.jpg" className="background" />
            <h4>Nickname:</h4>
            <input
                type="text"
                name="nickname"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
            />
            <h4>Title:</h4>
            <input
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <h4>Text:</h4>
            <textarea
                name="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <br />
            <button onClick={(e) => saveBlogPost()}className="Postblogbutton">Submit!</button>
            <button onClick={(e) => (window.location.href = '/Introduction')}className="Postblogbutton">Introduction Page </button>
            <button onClick={(e) => (window.location.href = '/Resources')} className="Postblogbutton">Resources </button>
            <button onClick={(e) => (axios.post("http://localhost:8000/api/User/logout").then(() => window.location.href = "/Login"))} className="Postblogbutton">
                Log off </button>
        </div>
    );
};

export default Postblog;