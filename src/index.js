import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Basic from "./Basic/Basic";
import WithShadows from "./WithShadows/WithShadows";
import Square from "./Square/Square";
import WithContent from "./WithContent/WithContent";
import InsideNavbar from "./InsideNavbar/InsideNavbar";
import Carousel from "./Carousel/Carousel";
import Testimonials from "./Testimonials/Testimonials";
import Profile from "./Profile/Profile";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Basic" element={<Basic />} />
        <Route path="/WithShadows" element={<WithShadows />} />
        <Route path="/Square" element={<Square />} />
        <Route path="/WithContent" element={<WithContent />} />
        <Route path="/InsideNavbar" element={<InsideNavbar />} />
        <Route path="/Carousel" element={<Carousel />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
