import React, { useState, useEffect } from 'react';
import './dashboardtiles.css'
const UpdateDetails = ({ propertyId }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState(0);
  const [beds, setBeds] = useState(0);
  const [bath, setBath] = useState(0);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const fetchPropertyDetails = async () => {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:3002/property?title=${encodeURIComponent(title)}`, {
        method: "GET",  
        headers: {
          "Content-Type": "application/json",
          'x-token': token,
        },
        
      });
      const data = await response.json();

      setTitle(data.title);
      setDescription(data.description);
      setPrice(data.price);
      setAddress(data.address);
      setZipcode(data.zipcode);
      setBeds(data.details_beds);
      setBath(data.details_bath);
      setStatus(data.status);
    };

    fetchPropertyDetails();
  },[title] );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const requestOptions = {
        method : 'PUT' ,
        headers: {
            'Content-Type': 'application/json',
            'x-token': token,
        },     
        body: JSON.stringify({
            title: title,
            description: description,
            price: parseInt(price, 10),
            address: address,
            zipcode: parseInt(zipcode, 10),
            details_beds: parseInt(beds, 10),
            details_bath: parseInt(bath, 10),
            status: status
          })
    }
   
    const response = await fetch(`http://localhost:3002/property/${propertyId}`, requestOptions)
    const data = await response.json();
    console.log(data)
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
          <h1>Property Listing</h1>
          <span>Listed property here</span>
        </div>
      </div>
    </div>
    <div class="tile-bottom"></div>
    <form onSubmit={handleSubmit}>
  <label>
    Title:
    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
  </label>
  <label>
    Description:
    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
  </label>
  <label>
    Price:
    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
  </label>
  <label>
    Address:
    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" />
  </label>
  <label>
    Zipcode:
    <input type="number" value={zipcode} onChange={(e) => setZipcode(e.target.value)} placeholder="Zipcode" />
  </label>
  <label>
    Beds:
    <input type="number" value={beds} onChange={(e) => setBeds(e.target.value)} placeholder="Beds" />
  </label>
  <label>
    Bath:
    <input type="number" value={bath} onChange={(e) => setBath(e.target.value)} placeholder="Bath" />
  </label>
  <label>
    Status:
    <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} placeholder="Status" />
  </label>
  <button type="submit">Update Property</button>
</form>
</div>
  </div>
  );
};

export default UpdateDetails;