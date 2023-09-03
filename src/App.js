import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { Layout } from "./components/Layout";
import WebDesign from "./pages/WebDesign/WebDesign";
import AppDesign from "./pages/AppDesign/AppDesign";
import GraphicDesign from "./pages/GraphicDesign/GraphicDesign";
import Locations from "./pages/Locations/Locations";
import Contact from "./pages/Contact";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
            <Route path="/app-design" element={<AppDesign />} />
            <Route path="/web-design" element={<WebDesign />}/>
            <Route path="/graphic-design"element={<GraphicDesign/>}/>
            <Route path="/locations" element={<Locations/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
