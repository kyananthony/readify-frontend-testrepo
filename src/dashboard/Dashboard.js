import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <div className="d-flex vh-100">
      {/* Sidebar */}
      <div className="bg-dark text-white p-3" style={{ width: "250px" }}>
        <h4 className="text-center">Readify Dashboard</h4>
        <ul className="nav flex-column">
          <li className="nav-item">
            <button className="btn btn-outline-light w-100 my-2" onClick={() => setActiveTab("Home")}>Home</button>
          </li>
          <li className="nav-item">
            <button className="btn btn-outline-light w-100 my-2" onClick={() => setActiveTab("Authors")}>Authors</button>
          </li>
          <li className="nav-item">
            <button className="btn btn-outline-light w-100 my-2" onClick={() => setActiveTab("Categories")}>Categories</button>
          </li>
          <li className="nav-item">
            <button className="btn btn-outline-light w-100 my-2" onClick={() => setActiveTab("Featured eBooks")}>Featured eBooks</button>
          </li>
        </ul>
      </div>
      
      {/* Main Content */}
      <div className="flex-grow-1 p-4">
        <h2>{activeTab}</h2>
        <p>Welcome to the {activeTab} section.</p>
      </div>
    </div>
  );
};

export default Dashboard;
