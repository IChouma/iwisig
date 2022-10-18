import './App.css';
import React from 'react';
import  {BrowserRouter,Routes,Route } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Formation from './components/formation/Formation';
import FormationS from './components/formation superieur/Formation';
import FormationE from './components/formation entreprise/Formation';
import FormationP from './components/formation particulier/Formation';
import Homepage from './components/homepage/Homepage';
import ContactUs from './components/ContactUs/Formation';



function App() {
  return (
    <BrowserRouter>
    <Routes>
    {/* <div class="container"> */}
    {/* <main> */}
    {/* <Header /> */}
    <Route exact path="/" element={<Homepage/>} />
    <Route exact path="/FormationP" element={<FormationP/>} />
    <Route exact path="/FormationE" element={<FormationE/>} />
    <Route exact path="/FormationS" element={<FormationS/>} />
    <Route exact path="/Formation" element={<Formation/>} />
    <Route exact path="/ContactUs" element={<ContactUs />} />
    
    {/* </main> */}

    {/* </div> */}
    </Routes>
    </BrowserRouter>
  )
}

export default App;

