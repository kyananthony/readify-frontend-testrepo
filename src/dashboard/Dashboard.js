import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


const Home = () => <div className="container mt-3"><h2>Home Page</h2></div>;
const Authors = () => <div className="container mt-3"><h2>Authors Page</h2></div>;
const Categories = () => <div className="container mt-3"><h2>Categories Page</h2></div>;
const FeaturedEbooks = () => <div className="container mt-3"><h2>Featured eBooks Page</h2></div>;

const Dashboard = () => {
  return (
    <Router>
      <div className="container mt-4">
        <h1 className="text-center">Readify Dashboard</h1>
        <nav className="nav nav-pills justify-content-center mb-4">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/authors">Authors</Link>
          <Link className="nav-link" to="/categories">Categories</Link>
          <Link className="nav-link" to="/featured-ebooks">Featured eBooks</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/featured-ebooks" element={<FeaturedEbooks />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Dashboard;
