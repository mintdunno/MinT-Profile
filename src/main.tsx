import React from "react";
import ReactDOM from "react-dom/client";
// Change the router for local development
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/index.css";
import App from "./App";
import { initPageAnimations } from "./utils/animations";

// Initialize page animations
document.addEventListener("DOMContentLoaded", () => {
  initPageAnimations();
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
