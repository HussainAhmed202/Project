import './Signin.css'
import Socials from './Socials.jsx'
import { useState,useEffect } from 'react';

export default function SignIN() {

  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  let [responseData, setResponseData] = useState([]);
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/user/`)
            .then(response => response.json())
           // .then(data => console.log(data))
           .then(data => setResponseData(data))
    }, []);

  const handleLogin = () => {
    console.log(username, password);
    const foundObject = responseData.find((response) => response.FirstName === username);
    if (foundObject) {
      console.log("Found record");
      // redirect to home
    }
    else {
        console.log("No record found");
    }
  };
 

  return (
      <div className="container-login">
        <div className="header-login">
          <div className="header-login-box"></div>
        </div>
        <div className="login-box">
       
          <div className="login">
            <h1>Sign in</h1>
            
            <input className="user-input" id="username" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <label htmlFor="username" className="login-input-icon">
              <i className="fa fa-user"></i>
            </label>

            <input className="user-input" id="password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <label htmlFor="password" className="login-input-icon">
            <i className="fa fa-lock"></i>
            </label>
            
            <div className="login-remember">
              <label className="login-checkbox">
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>

              <span className="login-remember-text">
                &nbsp;&nbsp;Remember me
              </span>
              <span className="forgot-password">
                <a href="#">Forgot your password?</a>
              </span>
            </div>
            <button onClick={handleLogin}>Login</button>
            <div className="not-registered center-text">
              <p>Not Registered? <a href="#">Create an Account</a></p>
            </div>
            <span className="login-separator"></span>
            <Socials />
            </div>
        </div>
      </div>
    );
}