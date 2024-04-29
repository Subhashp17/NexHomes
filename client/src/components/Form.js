import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './regform.css'

const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    };
  
    try {
      const response = await fetch("http://localhost:3002/login", requestOptions);
       
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data)
      if (data && data.token) {
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
      } else {
        console.log('No token received');
      }
    } catch (error) {
      console.log('Fetch error: ', error);
    }
  };

  return (
    <div class="login-page">
    <div class="form">
   LOG IN
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          value={username}
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <br />
      <p class="message">Not registered? <Link to="/register">Create an account</Link></p>
      <button type="submit">Submit</button>
    </form>
    </div>
    </div>
  );
};

export default Form;
