import React, { useEffect } from "react";
import axios from "axios";
import { navigate } from '@reach/router';
import ResourceLink from '../Component/ResourceLink';
import ReactSession from 'react-client-session';

const Resources = () => {
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
    const logOut = () => {
        // expire cookie
        document.cookie = 'token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        localStorage.removeItem('token')
        sessionStorage.removeItem('token')

        // log out
        axios.post("http://localhost:8000/api/User/logout").then(() => window.location.href = "/Login")
    }
    return (
        <div className="resourcepage">
            <h2>Websites Resources:</h2>
            <ResourceLink Url="https://www.nami.org/About-Mental-Illness/Treatments/Types-of-Mental-Health-Professional" />
            <ResourceLink Url="https://www.nationwidechildrens.org/specialties/behavioral-health" />
            <ResourceLink Url="https://www.nimh.nih.gov/health/find-help/" />
            <ResourceLink Url="https://www.mentalhealth.gov/get-help/immediate-help" />
            <ResourceLink Url="https://www.cdc.gov/wtc/mentalhealth.html" />
            <ResourceLink Url="https://www.betterhelp.com/helpme/" />
            <ResourceLink Url="https://www.familycentre.org/counselling" />
            <ResourceLink Url="https://www.samhsa.gov/find-help/national-helpline" />
            <ResourceLink Url="https://salienceneuro.com/7-facebook-pagesto-follow-about-mental-health-support-and-education/" />
            <ResourceLink Url="https://suicidepreventionlifeline.org/" />
            <ResourceLink Url="https://suicidepreventionlifeline.org/chat/" />
            <ResourceLink Url="https://www.veteranscrisisline.net/" />
            <ResourceLink Url="https://www.tcn.org/crisis" />
            <ResourceLink Url="https://www.crisistextline.org/" />




            <h2>Emergency Numbers!!!</h2>

            <p>Call 1-800-273-8255 and Press 1</p>
            <p>Text 838255</p>
            <p>1-800-662-HELP (4357)</p>
            <p>(866) 615-6464</p>
            <p>Crisis Hotline 877.695.NEED (6333)</p>
            <p>In a crisis?
                Text HOME to 741741 to connect with a Crisis Counselor
                Free 24/7 support at your fingertips</p>
            <p>US and Canada: text 741741</p>
            <p>911!</p>
            <p>216.762.059</p>
            <p>1-800-273-8255</p>

            <h2>Facebook:</h2>
            <p>If you have a Facebook account, there
                are plenty of decent mental health
                groups for those who are experiening
                mental illness and also for their
                spouses/partners (who might need
                support and knowledge from others.
                Plus, here is a reason why you might
                want to try out Facebook, check out this
                this link:</p>

            <a href="https://www.makeuseof.com/ways-facebook-help-mental-health/">Facebook mental health group</a>


            <h2>Helpful Tools:</h2>
            <ul>
                <li>music</li>
                <li>meditation</li>
                <li>incense</li>
                <li>exerise</li>
                <li>hobbies</li>
                <li>Steam: this is a website that has games online,
                    some are free, which can be used to relax those
                    who are not into other methods of relaxing, etc.
                    You do have to sign up for the site, but it's worth
                    checking out, here is the website: <a href="https://store.steampowered.com/">Steam game site</a></li>
            </ul>



            <button onClick={(e) => (window.location.href = '/BlogPage')} className="resourcebutton">
                Blog Page </button>

            <button onClick={(e) => (window.location.href = '/Postblog')} className="resourcebutton">
                Post a Blog </button>

            <button onClick={(e) => (window.location.href = '/Introduction')} className="resourcebutton">
                Introduction Page </button>

            <button onClick={(e) => (axios.post("http://localhost:8000/api/User/logout").then(() => { window.location.href = "/Login" }))} className="resourcebutton">
                Log off </button>
        </div >
    );
};

export default Resources;