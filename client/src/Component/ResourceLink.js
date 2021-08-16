import React, {useState} from "react";
import axios from "axios";
//import { navigate } from '@reach/router';
import Cookies from 'js-cookie';

const ResourceLink = (props) => {
    const [yourRating, setYourRating] = useState(3);
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
    //setYourRating(getYourRating()); // get rating from database, save in state variable

    const saveRating = (url) => {
        axios.post("http://localhost:8000/api/Rating", {
            Link: url,
            Rating: yourRating
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
            <div className="hidden">
                Community Rating: <span>{communityRating}</span>
            </div>
            <div className="hidden">
                Your Rating: <input type="number" min="1" max="5" defaultValue={yourRating} onChange={(e) => setYourRating(e.target.value)}/>
                <input type="button" onClick={(e) => saveRating(url)} value="Save" />
            </div>
        </div>
    );
};

export default ResourceLink;