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
  );
};

export default Dashboard;