import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

 
const container = document.getElementById("root");
const root = createRoot(container);
// root.render(React.createElement("h1", {}, "I Am Learning React!"));
root.render(React.createElement(App));