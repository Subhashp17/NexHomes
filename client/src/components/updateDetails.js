import React, { useState, useEffect } from 'react';

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
  );
};

export default UpdateDetails;