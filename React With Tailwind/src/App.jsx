import "../assets/css/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useState } from "react";

// import Header from "./components/Header"
import Home from "../pages/Home";
import Login from "./components/Login";
import Details from "../pages/Details";
import AdoptedPetContext from "../context/AdoptedPetContext";

const queryClient = new QueryClient();

const App = () => {
    const adoptedPet = useState(null);
    return (

        <div className="p-0 m-0 bg-amber-400" >
            <React.StrictMode>
                <BrowserRouter>
                    <QueryClientProvider client={queryClient}>
                        <AdoptedPetContext.Provider value={adoptedPet}>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/details/:id" element={<Details />} />
                                <Route path="/login" element={<Login />} />
                            </Routes>
                        </AdoptedPetContext.Provider>
                    </QueryClientProvider>
                </BrowserRouter>
            </React.StrictMode>
        </div>
    )
};

export default App;