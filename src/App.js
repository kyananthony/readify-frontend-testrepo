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
import Login from './pages/Login';
import MyBooks from './pages/MyBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js`;

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
        <Route path="/login" element={<Base><Login /></Base>} />
        <Route path="/genre/:genreName" element={<Base><GenrePage /></Base>} /> 
        <Route path="/my-books" element={<Base><MyBooks /></Base>} />
      </Routes>
    </Router>
  );
}

export default App;

        