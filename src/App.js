import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ResumeBuilder from './pages/ResumeBuilder';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/builder" element={<ResumeBuilder />} />
            </Routes>
        </Router>
    );
}

export default App;
