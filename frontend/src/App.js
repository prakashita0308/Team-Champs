import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import AddMember from './components/AddMember';
import ViewMembers from './components/ViewMembers';
import MemberDetails from './components/MemberDetails';
import './App.css'; // Importing the CSS file for styling

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="header">
          <h1>Team Champs</h1>
          <nav className="nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/add" className="nav-link">Add Member</Link>
            <Link to="/view" className="nav-link">View Members</Link>
          </nav>
        </header>
        <main className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add" element={<AddMember />} />
            <Route path="/view" element={<ViewMembers />} />
            <Route path="/member/:id" element={<MemberDetails />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>&copy; 2025 Team Champs. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
