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

  return (
    <div class="grid">
      <div class="tile">
    <div>
    <Link to="/addproperty">Add property Here</Link>
    {data && data.map((item, index) => (
      <div key={index} className="card">
        <img src={item.image} alt={item.title} />
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </div>
    ))}
  </div>
  </div>
  </div>
  );
};

export default Dashboard;