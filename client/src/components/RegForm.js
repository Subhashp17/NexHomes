import React from "react";
import { useState } from "react";

import './regform.css'

import { useNavigate } from "react-router-dom";



const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email,setEmail] = useState("");
  const [isBuyer,setIsBuyer] = useState(false);
  const [isSeller, setIsSeller] = useState(false);

  let navigate = useNavigate();

  const handleSubmit= async (e) =>{
    e.preventDefault();
    const requestOptions = {
        method : 'POST' ,
        headers: {
            'Content-Type': 'application/json'
        },
        body :JSON.stringify({ username: username, password: password , email : email , isBuyer : isBuyer , isSeller : isSeller}) 
    }
    console.log(username,password)
    const response = await fetch('http://localhost:3002/register', requestOptions)
    const data = await response.json();
    console.log(data)
    navigate("/");
  }

  return (
    <div class="login-page">
    <div class="form">
   REGISTER AN ACCOUNT
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
      <label>
        <input
          type="String"
          value={email}
          placeholder="email address"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Are you a Buyer?
        <input
          type="checkbox"
          value={isBuyer}
          onChange={(e) => setIsBuyer(e.target.checked)}
        />
      </label>
      <label>
        Are you a seller?
        <input
          type="checkbox"
          value={isSeller}
          onChange={(e) => setIsSeller(e.target.checked)}
        />
      </label>
      <br/>
      <button type = 'submit'>Submit</button>
    </form>
    </div>
    </div>
  );
};

export default Form;