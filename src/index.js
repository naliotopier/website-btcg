import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import App from "./components/App.jsx";
import Navbar from "./components/Navbar.jsx";

const root = createRoot(document.getElementById("root"));

root.render(<App />);
