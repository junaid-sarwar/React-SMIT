import "../assets/css/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "../pages/Home";

const App = () => {
    return (
        
        <div>
            <React.StrictMode>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
            </BrowserRouter>
            </React.StrictMode>
        </div>
)};

export default App;