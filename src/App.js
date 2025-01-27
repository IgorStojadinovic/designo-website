import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { Layout } from "./components/Layout";
import WebDesign from "./pages/WebDesign/WebDesign";
import AppDesign from "./pages/AppDesign/AppDesign";
import GraphicDesign from "./pages/GraphicDesign/GraphicDesign";
import Locations from "./pages/Locations/Locations";
import Contact from "./pages/Contact";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg mb-6 text-gray-600">
          Oops! The page you're looking for doesn't exist or was moved.
        </p>
        <div className="flex space-x-4">
          <Link
              to="/"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Go to Home
          </Link>
          <Link
              to="/contact"
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
          >
            Contact Us
          </Link>
          <Link
              to="/locations"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          >
            View Locations
          </Link>
        </div>
      </div>
  );
};


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
            <Route path="app-design" element={<AppDesign />} />
            <Route path="web-design" element={<WebDesign />}/>
            <Route path="graphic-design"element={<GraphicDesign/>}/>
            <Route path="locations" element={<Locations/>}/>
            <Route path="contact" element={<Contact/>}/>
          {/* Add a fallback route */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
