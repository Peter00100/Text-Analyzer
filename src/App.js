import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {

  const [mode,setMode]= useState('dark')
 

  const toggleMode= ()=> {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor='#2b2b2c'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='pink'
    }
  }
  return (
    <div>
      <Router> 
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />  
      <div className="container my-3" >
      <Routes>
              <Route exact path="/about"element={<About />}/>
              <Route exact path="/" element={<Textform heading="Enter text below to analyze" mode={mode} />}/>
      </Routes>
      </div>  
      </Router>
      {/* <Textform heading="Enter text below to analyze" mode={mode} /> */}
    </div>
  );
}

export default App;