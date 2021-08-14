import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate } from '@reach/router';

const BlogPage = () => {
    const [blogPosts, setBlogPosts] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/Blog", {},
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
                setBlogPosts(res.data);
            })
            .catch(err => {
                console.log(err.response);
            });
    }, []);

    return (
        <div>
            <h1>BLOG PAGE</h1>
            <h5>**Please feel free to leave comments in your
                blogs at the end of them or suggest links to other
                sites, etc that might beneft others. I will add them
                to the Resource Page as soon as I can. Thanks!*</h5>
            {
                blogPosts.map(blogPost => {
                    return (
                        <div>
                            <h1>{blogPost.Title}</h1>
                            <p>{blogPost.Text}</p>
                        </div>
                    )
                })
            }


            <button onClick={(e) => (window.location.href = '/')}>
                Log off </button>
            <button onClick={(e) => (window.location.href = '/')}>
                Post a Blog </button>
            <button onClick={(e) => (window.location.href = '/')}>
                Home Page </button>

        </div>
    );
};

export default BlogPage;