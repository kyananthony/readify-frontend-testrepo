// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Base from './layouts/Base';
import Home from './pages/Home';
import AuthorList from './pages/AuthorList';
import AuthorDetail from './pages/AuthorDetail';
import CategoryList from './pages/CategoryList';
import FeaturedEbooks from './pages/FeaturedEbooks';
import Dashboard from './dashboard/Dashboard';
import GenrePage from './pages/GenrePage';  // Import GenrePage

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Base><Home /></Base>} />
        <Route path="/authors" element={<Base><AuthorList /></Base>} />
        <Route path="/author/:authorId" element={<Base><AuthorDetail /></Base>} />
        <Route path="/categories" element={<Base><CategoryList /></Base>} />
        <Route path="/featured-ebooks" element={<Base><FeaturedEbooks /></Base>} />
        <Route path="/dashboard" element={<Base><Dashboard /></Base>} />
        
        {/* Route for Genre Page */}
        <Route path="/genre/:genreName" element={<Base><GenrePage /></Base>} /> 
      </Routes>
    </Router>
  );
}

export default App;
