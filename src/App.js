import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Base from "./layouts/Base";
import Home from "./pages/Home";
import AuthorList from "./pages/AuthorList";
import CategoryList from "./pages/CategoryList";
import FeaturedEbooks from "./pages/FeaturedEbooks";
import Dashboard from "./dashboard/Dashboard"; // Import Dashboard

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Base><Home /></Base>} />
        <Route path="/authors" element={<Base><AuthorList /></Base>} />
        <Route path="/categories" element={<Base><CategoryList /></Base>} />
        <Route path="/featured-ebooks" element={<Base><FeaturedEbooks /></Base>} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Add Dashboard Route */}
      </Routes>
    </Router>
  );
}

export default App;
