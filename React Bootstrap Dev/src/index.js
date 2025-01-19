import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
 
const container = document.getElementById("root");
const root = createRoot(container);
// root.render(React.createElement("h1", {}, "I Am Learning React!"));
root.render(React.createElement(App));