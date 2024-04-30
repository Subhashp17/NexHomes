import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form'; // Assuming this is your login form
import RegForm from './components/RegForm';
import Dashboard from './components/Dashboard';
import AddProperty from './components/AddProperty';
import UpdateDetails from './components/updateDetails';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/register" element={<RegForm />} />
        <Route path="/dashboard" element = {<Dashboard/>}/>
        <Route path="/addproperty" element = {<AddProperty/>}/>
        <Route path="/updateproperty" element = {<UpdateDetails/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </Router>
  );
}

export default App;