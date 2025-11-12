import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import About from "./About";
import CommonHeader from "./CommonHeader";
import Vision from "./Vision";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Core from "./Corevalues";
import Goals from "./Goals";
import Management from "./Management";
import PrincipalMsg from "./PrincipalMsg";


const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      {isHomePage ? <Header /> : <CommonHeader />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vision" element={<Vision/>} />
        <Route path="/goals" element={<Goals/>} />
        <Route path="/core" element={<Core/>} />
        <Route path="/management" element={<Management/>} />
        <Route path="/Principal" element={<PrincipalMsg/>} />
        
      </Routes>
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;

