import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthForm from './components/AuthForm';
import HomePage from './components/HomePage';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<AuthForm />} />
                    <Route path="/home" element={<HomePage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
