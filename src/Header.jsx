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
      <img src="/src/assets/logo-vyws.png" alt="" />
     Mahila Arts Commerce College, Chandur Railway
      </div>

      <nav>
       <a href=""> Home</a>
       <a href=""> About</a>
       <a href=""> Administration</a>
       <a href=""> Academics</a>
       <a href=""> IQAC/NAAC</a>
       <a href=""> Students</a>
       {/* <a href=""> Facilities</a> */}
       {/* <a href=""> Photo Gallery</a> */}
       <a href=""> Contact</a>
      </nav>
    </header>
  );
}
