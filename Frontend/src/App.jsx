//import './App.css'
import Navbar from "./components/NavBar";
import ScrollingNavbar from "./components/ScrollingNavbar ";
import Header from "./components/Header";
//import HeroSection from "./components/HeroSection";

import CropProducts from "./components/CropProducts";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ContactPage from "./components/ContactPage";
import SeedsPage from "./components/SeedsPage"
 


function App() {
  return (
    <>
      
      <ScrollingNavbar></ScrollingNavbar>
      <Router>
      <Navbar>


        
      </Navbar>
      <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="CropProducts" element={<CropProducts />} />
      <Route path="/SeedsPage" element={<SeedsPage />} />
      <Route path="/" element={<Home />} /> 
        <Route path="/contact" element={<ContactPage />} />
        {/* Baaki routes yahan */}
      </Routes>
    
    </Router>
     
    </>
  );
}

export default App;

