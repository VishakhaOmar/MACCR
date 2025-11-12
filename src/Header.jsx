import React, { useEffect, useState } from "react";
import "./Header.css";

export default function Header({ page = "home" }) {
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current < lastScroll && current > 100) setHidden(true);
      else setHidden(false);
      if (current > 150) setScrolled(true);
      else setScrolled(false);

      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <header
      className={`header ${page} ${hidden ? "hide" : ""} ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="logo">
        <img src="/src/assets/logo-vyws.png" alt="College Logo" />
        Mahila Arts Commerce College, Chandur Railway
      </div>

      <nav>
        <a href="/">Home</a>

        <a className="linkhover" href="">About▾
          <div className="dropdown-content">
            <a href="/about">About college</a>
            <a href="/vision">Vision & Mission</a>
            <a href="/goals">Goals & Objectives</a>
            <a href="/core">Core values</a>
            <a href="/src/assets/PDF's/salient_features.pdf" target="_blank">Salient features</a>
            <a href="/src/assets/PDF's/procedures.pdf" target="_blank">Procedure and Policies</a>
            <a href="/src/assets/PDF's/handbook.pdf" target="_blank">Handbook & Human values</a>
            <a href="/src/assets/PDF's/Green-Book.pdf" target="_blank">Green book for college</a>
            <a href="/src/assets/PDF's/College-Handbook.pdf" target="_blank">College handbook</a>
            {/* Optional Nested dropdown */}
            <div className="sub-dropdown">
              <a href="#">Facilities▸</a>
              <div className="sub-dropdown-content">
                <a href="#">Library</a>
                <a href="#">Laboratories</a>
                <a href="#">Nss</a>
                <a href="#">Playground</a>
              </div>
            </div>
          </div>
          </a>

        {/* Dropdown for Administration */}
          <a className="linkhover" href="#">Administration▾
          <div className="dropdown-content">
            <a href="">Management Body</a>
            <a href="/src/assets/PDF's/College-Development-Committee.pdf" target="_blank">College Development Committee (CDC)</a>
            <a href="" >Principal’s Message</a>
            <a href="">Chairman’s Message</a>
            <a href="">Code of Professional Ethics</a>
            <a href="/src/assets/PDF's/PO-PSO-CSO.pdf" target="_blank">PO, PSO, CO</a>
            <a href="/src/assets/PDF's/Welfare-Schemes.pdf" target="_blank">Welfare Scheme</a>

            {/* Optional Nested dropdown */}
            <div className="sub-dropdown">
              <a>Code of Conduct ▸</a>
              <div className="sub-dropdown-content">
                <a href="src\assets\PDF's\for-Student.pdf" target="_blank">For Students</a>
                <a href="src\assets\PDF's\Teaching-Staff.pdf" target="_blank">For Teachers</a>
                <a href="src\assets\PDF's\for-non-teaching-Staff.pdf" target="_blank">For Non-Teaching Staff</a>
              </div>
            </div>
          </div>
          </a>

        <a className="linkhover" href="#">Acadmics▾
          <div className="dropdown-content">
            <div className="sub-dropdown right">
              <a href="#">UG (B.A - Humanities) ▸</a>
              <div className="sub-dropdown-content">
                <p>Departments</p>
                <a href="#">English</a>
                <a href="#">Economics</a>
                <a href="#">Geography</a>
                <a href="">Home Economics</a>
                <a href="">Marathi</a>
                <a href="">Sociology</a>
                <a href="">Political Science</a>
                <a href="">Marathi Literature</a>
              </div>
            </div>
            <div className="sub-dropdown right">
              <a href="#">PG (M.A.)▸</a>
              <div className="sub-dropdown-content">
                <a href="">Home Economics</a>
                <a href="">Marathi</a>
              </div>
            </div>
            <div className="sub-dropdown right">
              <a href="#">Ph.D Research center▸</a>
              <div className="sub-dropdown-content">
                <a href="#">English (Ph.D)</a>
                <a href="">Marathi (Ph.D)</a>
              </div>
            </div>
          </div>
          </a>

          <a className="linkhover" href="#">IQAC/NAAC▾
          <div className="dropdown-content">
            <a href="#">IQAC Composition</a>
            <a href="#">Annual Reports (AQAR)</a>
            <a href="#">NAAC</a>
            <a href="#">Best Practices</a>
          </div>
          </a>

        <a className="linkhover" href="#">Students▾
          <div className="dropdown-content">
            <a href="">NSS Activities</a>
            <a href="">Carrer Katta </a>
            <a href="">Career Counselling Cell</a>
            <a href="">Nature Club</a>
            <a href="">Student Council</a>
            <a href="">Incentive Marks</a>
            <a href="">Anti-Ragging Act</a>
          </div>
          </a>
          
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}
