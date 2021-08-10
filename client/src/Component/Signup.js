import React, { useState } from "react";
import axios from "axios";
import { navigate } from '@reach/router';

const Signup = () => {
  const [name, setName]= useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword]= useState('')
  const [errorMessage, setErrorMessage] = useState("");

  const Signup = event => {
    event.preventDefault();
    axios.post("http://localhost:8000/api/User", { 
        Name: name,
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
        navigate("/restaurants");
      })
      .catch(err => {
        console.log(err.response);
        setErrorMessage(err.response.data.message);
      });
  };

  return (
    <div>
      <h1>ONE DAY AT A TIME!</h1>
      <p className="error-text">{errorMessage ? errorMessage : ""}</p>
      <form onSubmit={Signup}>
        <div>
             <label>Name</label>
          <input
            type="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

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
           <label>confirmpassword</label>
          <input
            type="password"
            name="confirmpassword"
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="center">
          <button 
            type="submit"
          >Sign up</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;