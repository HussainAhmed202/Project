import React from 'react';
import '../../styles/Signin.css';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Agreement() {
    const location = useLocation();
    const { userData } = location.state;

    const navigate = useNavigate();

    // Access user data
     console.log(location.state);
  
    const goToPrevious = () => {
      navigate(-1);
    };
  
    const validateForm = () => {
      const checkboxChecked = document.querySelector('.login-checkbox input').checked;
  
      if (checkboxChecked) {
          console.log('Form validated. Ready for submission.');
          
          // register user
          const dataToSend = JSON.stringify(location.state);
          fetch("http://127.0.0.1:8000/api/signup", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',    
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
            localStorage.setItem('username', data.email);
            navigate('/home'); 
          }
        })
        .catch((error) => {
          console.log(error);
        }
          )
      }
      else {
        alert('Please agree to the terms before submitting.');
      }
    };

    return (
        <div className="container-login">
            <div className="login-box">
                <div className="login">
                    <h1>User Agreement</h1>
                    <div>
                        <h4>Code of Conduct:</h4>
                        <ul>
                            <li>Respect other users and their work.</li>
                            <li>Do not engage in any form of harassment or offensive behavior.</li>
                            <li>Use the platform responsibly and ethically.</li>
                            <li>Only submit code that you have the right to use. Respect the intellectual property rights of others.</li>
                            <li>Do not attempt to exploit any security vulnerabilities. Code submitted for testing may be logged and analyzed for debugging and improvement purposes. Use the testing section responsibly and refrain from malicious activities. CodeCraft is not liable for any damage or loss resulting from the use of the platform.</li>
                            <li>We reserve the right to terminate or suspend accounts violating these terms.</li>
                        </ul>
                        <p>Report any security concerns to <a href="mailto:codecraft.help@gmail.com">codecraft.help@gmail.com</a>.</p>
                        <p>We value your privacy. Please review our Privacy Policy to understand how your data is handled.</p>
                        <p>Happy coding!<br />CodeCraft Team</p>
                        <div className="login-remember">
                            <label className="login-checkbox">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                            <span className="login-remember-text">
                                &nbsp;&nbsp;<div>I agree to the User Agreement and I acknowledge that I have read the Code Craft Privacy Policy</div>
                            </span>
                        </div>

                        <div className="button-group">
                            <button className="previous-button" onClick={goToPrevious}>Previous</button>
                            <button className="next-button" onClick={validateForm}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}