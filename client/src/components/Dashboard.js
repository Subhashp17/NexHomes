import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './dashboardtiles.css'

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {

    const fetchData = async () => {
       const token = localStorage.getItem('token');

       const requestOptions = {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "x-token" : token
            },
            
          };
      const response = await fetch('http://localhost:3002/property',requestOptions);
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);

  /*const handleUpdate = async (title) => {
    <Link to="/updateproperty"></Link>
   /* const token = localStorage.getItem('token');
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-token": token,
        
      },
      "body": JSON.stringify({title: title})
    };
    const response = await fetch('http://localhost:3002/property', requestOptions);
    const data = await response.json();
    console.log(data);  
    setData(data);*
    
  };*/
  
  const handleDelete = async (title) => {
    const token = localStorage.getItem('token');
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "x-token": token,
        
      },
      "body": JSON.stringify({title: title})
    };
    const response = await fetch('http://localhost:3002/property', requestOptions);
    const data = await response.json();
    console.log(data);  
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
          <span>Listed here</span>
        </div>
      </div>
    </div>
    <div class="tile-bottom"></div>
    <div>{
      localStorage.getItem('token') ?<>
    <Link to="/addproperty">Add property Here</Link>
    {data && data.map((item, index) => (
  <div key={index} className="card">
    <img src={item.image} alt={item.title} />
    <h2>{item.title}</h2>
    <p>{item.description}</p>
    <Link to="/updateproperty">
  <button>Update</button>
</Link>
    <button onClick={() => handleDelete(item.title)}>Delete</button>
  </div>
))}</>: <h1>Please login to view this page<a href ='/'>LOGIN</a></h1>}
  </div>
  </div>
  </div>
  );
};

export default Dashboard;