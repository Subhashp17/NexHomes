import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
const AddProperty = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState(0);
  const [beds, setBeds] = useState(0);
  const [bath, setBath] = useState(0);
  const [status, setStatus] = useState("");
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const requestOptions = {
        method : 'POST' ,
        headers: {
            'Content-Type': 'application/json',
            'x-token': token,
            
        },     
        body: JSON.stringify({
            title: title,
            description: description,
            price: parseInt(price, 10),
            Address: address,
            zipcode: parseInt(zipcode, 10),
            details_beds: parseInt(beds, 10),
            details_bath: parseInt(bath, 10),
            status: status
          })
    }
   
    const response = await fetch('http://localhost:3002/property', requestOptions)
    const data = await response.json();
    console.log(data)
    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit}>
    <label>
      Title:
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
    </label>
    <label>
      Description:
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
    </label>
    <label>
      Price:
      <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
    </label>
    <label>
      Address:
      <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
    </label>
    <label>
      Zipcode:
      <input type="number" value={zipcode} onChange={(e) => setZipcode(e.target.value)} />
    </label>
    <label>
      Beds:
      <input type="number" value={beds} onChange={(e) => setBeds(e.target.value)} />
    </label>
    <label>
      Bath:
      <input type="number" value={bath} onChange={(e) => setBath(e.target.value)} />
    </label>
    <label>
      Status:
      <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} />
    </label>
    <button type='submit'>Add Property</button>
  </form>
  );
};

export default AddProperty;