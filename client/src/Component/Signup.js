import React, { useState } from "react";
import axios from "axios";
import { navigate } from '@reach/router';

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState('')
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
        navigate("/");
      })
      .catch(err => {
        console.log(err.response);
        setErrorMessage(err.response.data.message);
      });
  };

  return (
    <div className="frontpage">
      <h1 className="title">ONE DAY AT A TIME!</h1>
      <p className="error-text">{errorMessage ? errorMessage : ""}</p>
      <button
        type="submit"
        onClick={() => window.location.href = '/Login'} className=
        "Signupbutton"
      >Login!</button>
      <form onSubmit={Signup}>
        <div>
          <h4 className="quotes"> The way I see it, if you want the rainbow, you
            gotta put up with the rain
            by Dolly Parton</h4>
          <h4 className="quotes1">It matters if you don't give up
            _ Stephen Hawking</h4>
          <table class="bold">
            <tr>
              <td>
                <label>Name</label>
                <input
                  type="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </td>
              <td>
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </td>
              <td>
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="confirmpassword"
                  value={confirmpassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </td>
            </tr>
          </table>
        </div>
        <div className="center">
          <button
            type="submit"
            className="Signupbutton"
          >Sign up</button>
          <br />
          <h5 className="quotes2">*********This site is only for information and support
            services. It is not intended to cure or
            professionally help anybody. If you experiencing
            trouble that needs attention immediately please
            call 911!*********</h5>
        </div>
      </form>
      <img src="rainbow.jpg" className=" rainbow" />
    </div>
  );
};

export default Signup;