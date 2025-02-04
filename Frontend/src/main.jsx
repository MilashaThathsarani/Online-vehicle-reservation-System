// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/NavBar/index";
import Home from "./pages/Home";
// import Cars from "./pages/Cars";
// import Bookings from "./pages/Bookings";
// import Contact from "./pages/Contact";
// import Login from "./pages/NavBar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {<Route path="/" element={<Home />} />
        // <Route path="/cars" element={<Cars />} />
        // <Route path="/bookings" element={<Bookings />} />
        // <Route path="/contact" element={<Contact />} />
        // <Route path="/login" element={<Login />} /> 
        }
      </Routes>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
