import './Signin.css'
//import Cookies  from 'js-cookie';

import { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate } from "react-router-dom"

import fbImage from '../../assets/fb.png'; 
import linkedinImage from '../../assets/linkedin.png';
import twitterImage from '../../assets/twitter.png';


export default function SignIN() {

  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [responseData, setResponseData] = useState([]);
  const navigate = useNavigate();


  function onClick() {
    const dataToSend = JSON.stringify({ "Email": username, "Password": password });
    //const csrfToken = getCookie('csrftoken');

   // console.log(document.cookie);

     // Check if CSRF token is available
    // if (!csrfToken) {
    //     console.error('CSRF token is missing. Unable to make the request.');
    //     return;
    // }

    // send data to the server
      fetch("http://127.0.0.1:8000/api/login", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
         // "X-CSRFToken":csrfToken,    
        },
        body: dataToSend,
      })
        
        .then((response) => {
          if (response.ok) {
              return response.json();
      }
    }
      )    
        .then((data) => {
          if (data) {
            console.log(data);
             // add token to local storage
            localStorage.setItem('token', data.token);
            localStorage.setItem('username', data.Email);
            navigate('/home'); // useNavigate hook to navigate
          }
        })
        .catch((error) => {
          console.log(error);
        }
          )
  }

  //   // send credentials to the server for authentication
  //   const handleLogin = async () => {
  //   try {
  //     // Fetch CSRF token from the server
  //     const csrfResponse = await fetch('http://127.0.0.1:8000/api/login', {
  //       method: 'GET',
  //       headers: {'X-CSRFToken': csrftoken},
  //       credentials: 'include', // Include credentials for cross-origin requests
  //     });

  //     if (!csrfResponse.ok) {
  //       console.error('Failed to fetch CSRF token');
  //       return;
  //     }

  //     const csrfToken = csrfResponse.headers.get('X-CSRFToken');

  //     // Send login credentials to the Django API
  //     const response = await fetch('http://your-django-api.com/api/login/', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'X-CSRFToken': csrfToken, // Include the CSRF token in the headers
  //       },
  //       credentials: 'include', // Include credentials for cross-origin requests
  //       body: JSON.stringify({
  //         username: username,
  //         password: password,
  //       }),
  //     });

  //     if (response.ok) {
  //       console.log('Login successful');
  //       // Redirect or perform any actions upon successful login
  //     } else {
  //       console.error('Login failed');
  //     }
  //   } catch (error) {
  //     console.error('Error during login:', error.message);
  //   }
  // };

  

  
  // const handleLogin = () => {
  //   console.log(username, password);
  //   const foundObject = responseData.find((response) => response.FirstName === username);
  //   if (foundObject) {
  //     console.log("Found record");
  //     // redirect to home
  //      navigate('/home'); // useNavigate hook to navigate


  //   }
  //   else {
  //       console.log("No record found");
  //   }
  // };
 

  return (
    <div className="container-login">
        {/* <div className="header-login">
          <div className="header-login-box"></div>
        </div> */}
    
      <div className="login-box">
        <div className="login">
          <h1>Sign in</h1>
            <input className="user-input" id="username" type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <label htmlFor="username" className="login-input-icon">
              <i className="fa fa-user"></i>
            </label>

            <input className="user-input" id="password" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
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
                <Link to="/signup">Forgot your password?</Link>
              </span>
            </div>
            <button onClick={onClick}>Login</button>
            <div className="not-registered center-text">
              <p>Not Registered? <Link to="/signup">Create an Account</Link></p>
            </div>
            <span className="login-separator"></span>
            <div className="login-social-media">
                <img src={fbImage} alt="Facebook" width="50px" height="50px" />
                <img src={linkedinImage} alt="Linkedin" width="50px" height="50px" />
                <img src={twitterImage} alt="Twitter" width="50px" height="50px" />
           </div>
            </div>
        </div>
      </div>
    );
}