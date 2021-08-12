import React, { useState } from "react";
import axios from "axios";
import { navigate } from '@reach/router';
import Cookies from 'js-cookie';

const ResourceLink = (props) => {
    const url = props.Url;

    const getYourRating = () => {
        axios.post("http://localhost:8000/api/Rating/Lookup", {
            Link: url,
            UserID: Cookies.get('user_id')
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
    }

    const getCommunityRating = () => {
        axios.post("http://localhost:8000/api/Rating/average", {
            Link: url
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
    }

    const communityRating = getCommunityRating();
    let yourRating = getYourRating();

    const saveRating = (url, rating) => {
        axios.post("http://localhost:8000/api/Rating", {
            Link: url,
            Rating: rating, // TODO: determine why this is not being pulled from the web UI
            UserID: Cookies.get('user_id') // TODO: determine why this is not loading
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
            })
            .catch(err => {
                console.log(err.response);
            });
    };

    return (
        <div>
            <div>
                <a href={url}>{url}</a>
            </div>
            <div>
                Community Rating: <span>{communityRating}</span>
            </div>
            <div>
                Your Rating: <input type="number" min="1" max="5" value={yourRating} />
                <input type="button" onClick={(e) => saveRating(url, yourRating)} value="Save" />
            </div>
        </div>
    );
};

export default ResourceLink;