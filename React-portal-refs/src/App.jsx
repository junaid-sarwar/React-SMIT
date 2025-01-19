import "../assets/css/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "../pages/Home";
import Login from "./components/Login";
import Details from "../pages/Details";

const queryClient = new QueryClient();

const App = () => {
    return (
        
        <div>
            <React.StrictMode>
            <BrowserRouter>
            <QueryClientProvider client={queryClient}>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/details/:id" element={<Details/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
            </QueryClientProvider>
            </BrowserRouter>
            </React.StrictMode>
        </div>
)};

export default App;