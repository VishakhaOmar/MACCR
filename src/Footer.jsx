import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="first-footer">
        {/* Left side */}
        <div className="footer-section ">
          <h2 className="footer-head">Contact US</h2>
          <p className="footer-address">
            <br />
            Mahila Arts Commerce College, Chandur Railway
            <br />
            <br />
            Beside Shahid Hutama Smarak. Main Road,Chandur Railway Amravati (M.S.) 444904
            <br />
            <br />
            07222 2254183
          </p>
        </div>

        {/* Middle links */}
        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/admission">Admission</a></li>
            <li><a href="/alumni">Alumni</a></li>
            <li><a href="/download">Download</a></li>
            <li><a href="/antiragging">Antiragging Mechanism</a></li>
            <li><a href="/grievance">Students Grievance Redressal Mechanism</a></li>
          </ul>
        </div>

        {/* Social icons */}
        <div className="footer-section">
          <h2>Other Links</h2>
        <ul>
            <li><a href="https://www.sgbau.ac.in/">SGB Amravati University, Amravati</a></li>
            <li><a href="https://www.mahapolice.gov.in/">Government of Maharashtra</a></li>
             
            <li><a href="https://www.dhepune.gov.in/">Joint Director, Higher Education, Amravati</a></li>
             
            <li><a href="https://www.ugc.gov.in/">University Grants Commission</a></li>
             
            <li><a href="http://naac.gov.in/index.php/en/">NAAC</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-rights">
        <p>© {new Date().getFullYear()} Mahila Arts Commerce College, Chandur Railway. All Rights Reserved.
          </p>

        <span>Developed by  <a href="https://www.primathink.com/">PrimaThink</a></span>
        
        </div>
      </div>
    </footer>
  );
}
