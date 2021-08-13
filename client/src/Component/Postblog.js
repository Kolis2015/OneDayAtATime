import React, { useState } from "react";
import axios from "axios";
//import { navigate } from '@reach/router';
import Cookies from 'js-cookie';

const Postblog = () => {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const saveBlogPost = () => {
        // save the blog post
        const cookieData = document.cookie
            .split('; ')
            .find(row => row.startsWith('usertoken='))
            .split('=')[1];
        axios.post("http://localhost:8000/api/Blog", {
            UserID: cookieData,
            Title: title,
            Text: text
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
        // TODO: navigate to the correct page
        window.location.href = '/';
    };
    return (
        <div>
            <h2>Submit Your blog!</h2>
            <h4>Title</h4>
            <input
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <h4>Text</h4>
            <textarea
                name="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <br />
            <button onClick={(e) => saveBlogPost()}>Submit</button>
        </div>
    );
};

export default Postblog;