import React, { useState } from "react";
import axios from "axios";
import { navigate } from '@reach/router';
import ReactSession from 'react-client-session';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const Login = event => {
    event.preventDefault();
    axios.post("http://localhost:8000/api/User/login", {

      Email: email,
      Password: password,
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

        navigate("/Introduction");
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  return (
    <div>
      <img src="sunrise.jpg" className="background" />
      <h1>LOGIN</h1>
      <p className="error-text">{errorMessage ? errorMessage : ""}</p>
      <form onSubmit={Login}>
        <div>


          <label>Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

        </div>
        <div className="center">
          <button
            type="submit"
          >Login</button>
        </div>
      </form>
      <h2>Welcome Back!</h2>

      <p>Please take advantage of the site information, support, blogs, etc...
        Remember you are always welcome here!</p>
    </div>
  );
};

export default Login;