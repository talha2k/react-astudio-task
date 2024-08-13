// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppProvider } from './context/AppContext';  // Import the AppProvider
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Products from './pages/Products';

const App = () => {
    return (
        <AppProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/products" element={<Products />} />
                </Routes>
            </Router>
        </AppProvider>
    );
};

export default App;
