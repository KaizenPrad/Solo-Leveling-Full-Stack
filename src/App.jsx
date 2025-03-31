import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Characters from "./pages/Characters";
import Episodes from "./pages/Episodes";
import Comments from "./pages/Comments";
import About from "./pages/About";

function App() {
  return (
    <Router>
   
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/home" element={<Home />} />
        <Route path='/Character' element={<Characters/>}/>
          <Route path='/Episodes' element={<Episodes/>}/>
          <Route path='/Comments' element={<Comments/>}/>
          <Route path='/About' element={<About/>}/>
      </Routes>
    </Router>
  );
}

export default App;
