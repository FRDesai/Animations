import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import One from "./components/One";
import Two from "./components/Two";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="one" element={<One />} />
        <Route path="two" element={<Two />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
