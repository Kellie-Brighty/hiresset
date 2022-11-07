import React from 'react';
import './app.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import AuthChoice from './pages/auth/AuthChoice';
import Login from './pages/auth/Login';

const App = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/register-as" element={<AuthChoice />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    </Router>
  )
}

export default App