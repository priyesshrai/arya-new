"use client";
import React, { use, useEffect, useState } from "react";
import { Cover } from "../ui/cover";
import { BackgroundBeams } from "../ui/background-beams";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import Link from "next/link";
import Modal from "../modal/Modal";
const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

export default function Hero() {
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
      <BackgroundBeams />
      <div className="section-wraper">
        <div className="section-content">
          <div className="hero-heading">
            <h1>
              Every design begins with a vision, and ends with a{" "}
              <Cover>masterpiece</Cover>.
            </h1>
          </div>

          <div className="hero-testimonials">
            <div className="testimonials">
              <AnimatedTooltip items={people} />
            </div>
            <span>Meet my top clients.</span>
          </div>
          <div className="hero-description">
            <p>Hi, I am</p>
            <Typewriter
              options={{
                strings: [
                  "Arya Maurya.",
                  "UI/UX Designer.",
                  "Graphic Designer.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          <div className="hero-img-container">
            <div className="hero-img">
              <Image
                src="/images/arya.png"
                className="my-img"
                width={1000}
                height={1000}
                alt="Arya, I am a graphic and ui/ux designer with 2 years of experienc."
              />
              <div className="floating-img first">
                <Image
                  src="/images/figma.png"
                  alt="figma"
                  width={500}
                  height={500}
                />
              </div>
              <div className="floating-img sec">
                <Image
                  src="/images/ps.png"
                  alt="photo shop"
                  width={500}
                  height={500}
                />
              </div>
              <div className="third">
                <div className="badge-container">
                  <Image
                    src="/images/verified.png"
                    alt="photo shop"
                    width={500}
                    height={500}
                  />
                  <div>
                    <p>500+</p>
                    <span>Completed Projects</span>
                  </div>
                </div>
              </div>
              <div className="floating-img fourth">
                <Image
                  src="/images/canva.png"
                  alt="photo shop"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>

          <div className="hero-btn-container">
            <button onClick={() => setOpenModal(true)}>Hire Me</button>
            <Link href="/cv.pdf" download="Arya_Maurya_Resume.pdf">
              Download CV
            </Link>
          </div>
        </div>
      </div>
      <Modal modal={openModal} closeBtn={setOpenModal} />
    </section>
  );
}
