import React, { useState } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Navigate,
    Outlet
} from "react-router-dom";
import Login from './Login';
import Dashboard from './Dashboard';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={isLoggedIn ? <Dashboard /> :<Navigate to='/login'></Navigate> } />
                <Route path="/login" element={<Login />}>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
