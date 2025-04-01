import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Home from "./pages/Home";
import Episodes from "./pages/Episodes";
import Comments from "./pages/Comments";
import About from "./pages/About";

function App() {
  return (
    <Router>
   
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Home" element={<Home/>} />
        <Route path='/Episodes' element={<Episodes/>}/>
          <Route path='/Comments' element={<Comments/>}/>
          <Route path='/About' element={<About/>}/>
      </Routes>
    </Router>
  );
}

export default App;
