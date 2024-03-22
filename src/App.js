import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import Books from './components/searchbooks';
import Home from "./components/home.js";
import Showbook from './components/showbook.js';
import About from './components/about.js';
import Contact from './components/contact.js';
import Showcart from './components/showcart.js';
import Navbar from './components/Navbar.js';
import ScrollToTop from './components/ScrollToTop.js';
import Menu from './components/menu.js'
import './styles.css'
import {
BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Outlet />}/>
          <Route path="/" element={<Menu />} />
          <Route index element={<Home />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/searchbooks" element={<Books />} />
          <Route path="/showbook" element={<Showbook />} />
          <Route path="/showcart" element={<Showcart />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
