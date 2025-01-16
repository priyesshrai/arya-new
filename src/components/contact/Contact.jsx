"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Modal from "../modal/Modal";

export default function () {
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openModal]);
  return (
    <section className="section">
      <div className="section-wraper">
        <div className="section-heading">
          <h2
            style={{
              textAlign: "center",
              fontSize: "5rem",
              lineHeight: 1.2,
              fontFamily: "var(--font-syne)",
              fontWeight: "700",
            }}
          >
            Contact Me
          </h2>
        </div>
        <div className="contact-container">
          <button onClick={() => setOpenModal(true)}>Contact Me</button>
          <Link href="/cv.pdf" download="Arya_Maurya_Resume.pdf">
            Download CV
          </Link>
          <Link href="/portfolio.pdf" download="Arya_Maurya_Portfolio.pdf">
            Download Portfolio
          </Link>
        </div>
      </div>
      <Modal modal={openModal} closeBtn={setOpenModal} />
    </section>
  );
}
