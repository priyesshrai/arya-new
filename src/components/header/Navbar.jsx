"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="header">
      <nav className="nav">
        <ul className="link-ul">
          <li>
            <Link href="/" className={pathname === "/" ? "active-link" : ""}>
              home
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className={pathname.startsWith("/about") ? "active-link" : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className={pathname.startsWith("/services") ? "active-link" : ""}
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
              href="#"
              className={pathname.startsWith("/portfolio") ? "active-link" : ""}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className={
                pathname.startsWith("/certificats") ? "active-link" : ""
              }
            >
              certificates
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className={pathname.startsWith("/contact") ? "active-link" : ""}
            >
              contact us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
