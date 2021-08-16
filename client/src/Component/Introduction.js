import React, { useEffect } from "react";
import axios from "axios";
import { navigate } from '@reach/router';
import ReactSession from 'react-client-session';

const Introduction = () => {
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
    return (
        <div className="notalone">
            <h1>Introduction</h1>
            <p>This site is for anyone who is struggling with mental illness, or just having a bad day, come over
                here and blog, what's on your mind. This site is made to provide information to those to who need
                help and can't find the right resources. This site is a place to leave your information or phone
                number; if possible we will try to give you some resouces with information, and also groups that are
                available to join on media websites. Lastly , you can blog on here about your day to relieve the
                pressure and support each other, and also blog about good things as well, so just like a rainbow,
                there's always rains. No bullying, sexism, racism, etc will be tolerated on this site..Thank you. Please  leave comments in the blogs!</p>

            <h4>Thanks....</h4>

            <h5>Mental illness can affect anyone, it does not discriminate</h5>
            <img src="child.jpg" />
            <img src="BLM.jpg" />
            <img src="vets.jpg" />
            <img src="parents.jpg" />
            <br />

            <button onClick={(e) => (window.location.href = '/BlogPage')} className="Introductionbutton">
                Blog Page </button>
            <button onClick={(e) => (window.location.href = '/Resources')} className="Introductionbutton">
                Resources </button>

            <button onClick={(e) => (window.location.href = '/Postblog')} className="Introductionbutton">
                Post a Blog </button>


            <button onClick={(e) => (axios.post("http://localhost:8000/api/User/logout").then(() => { window.location.href = "/Login" }))} className="Introductionbutton">
                Log off </button>

        </div>
    );
};

export default Introduction;