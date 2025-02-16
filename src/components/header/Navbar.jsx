"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  Home01Icon,
  BubbleChatIcon,
  UserIcon,
  WorkAlertIcon,
  StarsIcon,
} from "hugeicons-react";

export default function Navbar() {
  const [currentLoaction, setCurrentLocation] = useState("/");

  return (
    <header className="header">
      <nav className="nav">
        <ul className="link-ul">
          <li>
            <Link
              onClick={() => setCurrentLocation("/")}
              href="/"
              className={currentLoaction === "/" ? "active-link" : ""}
            >
              home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setCurrentLocation("#about")}
              href="#about"
              className={currentLoaction === "#about" ? "active-link" : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setCurrentLocation("#services")}
              href="#services"
              className={currentLoaction === "#services" ? "active-link" : ""}
            >
              Services
            </Link>
          </li>
        </ul>
        <div className="logo">
          <span>ARYA</span>
        </div>
        <ul className="link-ul">
          <li>
            <Link
              href="#portfolio"
              onClick={() => setCurrentLocation("#portfolio")}
              className={currentLoaction === "#portfolio" ? "active-link" : ""}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              onClick={() => setCurrentLocation("#contact")}
              className={currentLoaction === "#contact" ? "active-link" : ""}
            >
              hire me
            </Link>
          </li>
        </ul>
      </nav>
      <div className="mob-nav">
        <div className="mob-nav-container">
          <div className="mob-nav-icon-container">
            <Link
              href="/"
              onClick={() => setCurrentLocation("/")}
              className={currentLoaction === "/" ? "mob-nav-active" : ""}
            >
              <Home01Icon />
            </Link>
            <span>Home</span>
          </div>
          <div className="mob-nav-icon-container">
            <Link
              href="#about"
              onClick={() => setCurrentLocation("#about")}
              className={currentLoaction === "#about" ? "mob-nav-active" : ""}
            >
              <UserIcon />
            </Link>
            <span>About</span>
          </div>
          <div className="mob-nav-icon-container">
            <Link
              href="#services"
              onClick={() => setCurrentLocation("#services")}
              className={
                currentLoaction === "#services" ? "mob-nav-active" : ""
              }
            >
              <WorkAlertIcon />
            </Link>
            <span>Services</span>
          </div>
          <div className="mob-nav-icon-container">
            <Link
              href="#portfolio"
              onClick={() => setCurrentLocation("#portfolio")}
              className={
                currentLoaction === "#portfolio" ? "mob-nav-active" : ""
              }
            >
              <StarsIcon />
            </Link>
            <span>Portfolio</span>
          </div>
          <div className="mob-nav-icon-container">
            <Link
              href="#contact"
              onClick={() => setCurrentLocation("#contact")}
              className={currentLoaction === "#contact" ? "mob-nav-active" : ""}
            >
              <BubbleChatIcon />
            </Link>
            <span>Contact</span>
          </div>
        </div>
      </div>
    </header>
  );
}
