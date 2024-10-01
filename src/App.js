import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./pages/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import Skills from './pages/Skills';


function App() {
  return (
    <BrowserRouter>
      <main className='text-gray-400 bg-gray-900 body-font min-h-screen w-screen'>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />}></Route>
          <Route path="work" element={<Work />}></Route>
          <Route path="skills" element={<Skills />}></Route>
          <Route path="contact" element={<Contact />}></Route>
        </Routes>
      </main>
      
    </BrowserRouter>
  );
}

export default App;
