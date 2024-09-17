import React from "react";
import "./app.scss";
import {
  Analytics,
  DashboardPreview,
  Distribution,
  Feature,
  Footer,
  Home,
  Navbar,
  STTop,
} from "./Components";
import Chat from "./Components/Chat.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Homepage,Executive,Legislative,Judiciary,FeedbackForm} from "./pages";

const App = () => {
  return (
    <div>
      <Navbar />
      
      <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/e" element={<Homepage />} />
          <Route path="executive" element={<Executive/>} />
          <Route path="legislative" element={<Legislative/>} />
          <Route path="judiciary" element={<Judiciary/>} />
          <Route path="feedback" element={<FeedbackForm/>} />
      </Routes>
      </BrowserRouter>
        <Footer />
        <STTop />
        <Chat/>
    </div>
  );
};

export default App;
