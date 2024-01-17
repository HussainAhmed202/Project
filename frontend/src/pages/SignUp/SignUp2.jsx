import React from 'react';
import './Signup.css'
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate(); 

  const redirectToAgree = () => {
    // Check if all input fields are filled
    const firstName = document.getElementById('firstname').value;
    const lastName = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (firstName === '' || lastName === '' || email === '' || password === '') {
      alert('Please fill all the fields.');
    } else {
      // Redirect to the Agreement page
      navigate('/agreement'); // Use navigate to go to the Agreement page
    }
  };

  return (
    <>
      <div className="container-login">
        <div className="header-login">
          <div className="header-login-box">
          </div>
        </div>
        <div className="login-box">
          <div className="login">
            <h1>Sign in</h1>
            <input className="user-input" id="firstname" type="text" placeholder="Firstname" />
            <label htmlFor="firstname" className="login-input-icon">
              <i className="fa fa-user"></i>
            </label>
            <input className="user-input" id="lastname" type="text" placeholder="Lastname" />
            <label htmlFor="lastname" className="login-input-icon">
              <i className="fa fa-user"></i>
            </label>
            <input class="user-input" id="email" type="email" placeholder="Email" />
            <label for="email" class="login-input-icon">
              <i class="fa fa-envelope"></i>
            </label>
            <input className="user-input" id="password" type="password" placeholder="Password" />
            <label htmlFor="password" className="login-input-icon">
              <i className="fa fa-lock"></i>
            </label>
            <div class="button-group">
              <button className="previous-button" onClick={() => navigate(-1)}>Previous</button>
              <button className="next-button" onClick={redirectToAgree}>Next</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}