import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './dashboardtiles.css'

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
<div class="grid">
  <div class="tile">
    <div class="tile-top flex-col">
      <div class="status"><svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 5.5C2.75736 6.86683 5.5 9 5.5 9C5.5 9 9.15685 4.12419 11.5 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
      <div class="badge"></div>
      <div class="title-top-logo flex-row">
        <div class="tile-top-content">
          <h1>New Property Listing</h1>
          <span>List your property here</span>
        </div>
      </div>
    </div>
    <div class="tile-bottom">
    <form onSubmit={handleSubmit}>
    <label>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
    </label>
    <label>
      <input type="text" placeholder="Description"value={description} onChange={(e) => setDescription(e.target.value)} />
    </label>
    <label>
      <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
    </label>
    <label>
      <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
    </label>
    <label>
      <input type="number" placeholder="Zipcode" value={zipcode} onChange={(e) => setZipcode(e.target.value)} />
    </label>
    <label>
      Bed #:
      <br></br>
      <input type="number" value={beds} onChange={(e) => setBeds(e.target.value)} />
    </label>
    <label>
      Bath #:
      <input type="number" value={bath} onChange={(e) => setBath(e.target.value)} />
    </label>
    <label>
      <input type="text" placeholder="Status" value={status} onChange={(e) => setStatus(e.target.value)} />
    </label>
    <br></br>
    <button type='submit'>Add Property</button>
  </form>
  </div>
  </div>
  </div>
  );
};

export default AddProperty;