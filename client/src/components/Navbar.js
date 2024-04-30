import React from 'react'
import './Navbar.css';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Navbar = () => {
  const handleLogout = () =>{
    localStorage.removeItem('token');}
  return (
    <nav className="navbar">
      <ul className="navbar-links">

        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>

        <li><a href="/dashboard">Home</a></li>
        <li><a href = "/" onClick={handleLogout}>Logout</a></li>

      </ul>
    </nav>
  )
}

export default Navbar

