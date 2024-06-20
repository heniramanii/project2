import React from 'react'; // Make sure to import React
import './App.css'; // Importing CSS file
import Cards from './cards.js';
import Section from './section.js';
import Cards2 from './cards2.js';
import Section1 from './section1.js';
import Footer from './footer.js';
import {BrowserRouter , Routes, Route} from 'react';
import Home from './Home.js';



function App() {
  return (
    <BrowserRouter>
      <Section/>
      <Cards/>
      <Cards2/>
      <Section1/>
      <Footer/>
      <Routes>
        <Route path="Home" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
