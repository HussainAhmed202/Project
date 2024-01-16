import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
//import Cookies from 'js-cookie';
import CSRFToken from '../../components/csrftoken';


export default function SignUp(){
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    Password: '',
  });
  const navigate = useNavigate();


  const handleChange =  (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  // send data to the server
  const handleSubmit = async (e) => {
    e.preventDefault();
 
    //formData =  Object { FirstName: "pop", LastName: "lop", Email: "poplop@mail.com", Password: "sdfsdfs" } 

    try {
      const response = await fetch('http://127.0.0.1:8000/api/signup', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        // add token to local storage
        localStorage.setItem('token', data.token);
        localStorage.setItem('username', data.username);
         navigate('/home'); // useNavigate hook to navigate

        
      }
      
    } catch (error) {
      console.error('Network error:', error.message);
    }
  };




  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="FirstName"
            value={formData.FirstName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="LastName"
            value={formData.LastName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="Password"
            value={formData.Password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

