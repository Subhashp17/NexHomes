import React from "react";
import { useState } from "react";
const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email,setEmail] = useState("");
  const [isBuyer,setIsBuyer] = useState(false);
  const [isSeller, setIsSeller] = useState(false);

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

  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label>
        E-mail:
        <input
          type="String"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Are you a Buyer:
        <input
          type="checkbox"
          value={isBuyer}
          onChange={(e) => setIsBuyer(e.target.checked)}
        />
      </label>
      <label>
        Are you a seller:
        <input
          type="checkbox"
          value={isSeller}
          onChange={(e) => setIsSeller(e.target.checked)}
        />
      </label>
      <br/>
      <button type = 'submit'>Submit</button>
    </form>
  );
};

export default Form;