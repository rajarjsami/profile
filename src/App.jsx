import React, { useState } from "react";
import SkillsChart from './components/SkillsChart'; // Importing the SkillsChart component
import Header from './components/Header'
import Slider from './components/Slider'
import './index.css'
import Products from './components/Products';
import ScrollToTopButton from './components/ScrollToTopButton';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import PrivacyPolicy from './components/PrivacyPolicy';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

function App()  {

  const [showPolicy, setShowPolicy] = useState(false);

  const togglePolicy = () => {
    setShowPolicy(!showPolicy);
  };


  return (
 <div className=' absolute'>
    <PrivacyPolicy show={showPolicy} onClose={togglePolicy}/>
 <Header onPolicyClick={togglePolicy}/>
   <Slider />
   <SkillsChart />
    <Products />
    <AboutUs/>
    <ContactUs />
    <Footer />

<ScrollToTopButton />

 </div>

 
  );
};

export default App
