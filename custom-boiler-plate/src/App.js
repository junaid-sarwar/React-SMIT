import React from "react";
import { createRoot } from "react-dom/client";
import Pet from "./Pet.jsx";
 
const container = document.getElementById("root");
const root = createRoot(container);
// root.render(React.createElement("h1", {}, "I Am Learning React!"));
root.render(React.createElement(Pet));