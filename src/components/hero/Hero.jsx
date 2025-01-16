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
    name: "Kashitij Huyndai",
    designation: "Software Engineer",
    image:
      "/images/testimonials/1.png",
  },
  {
    id: 2,
    name: "Furniture Mart",
    designation: "Product Manager",
    image:
      "/images/testimonials/2.png",
  },
  {
    id: 3,
    name: "Banarsi Saree",
    designation: "Data Scientist",
    image:
      "/images/testimonials/3.png",
  },
  {
    id: 4,
    name: "Mastertech",
    designation: "UX Designer",
    image:
      "/images/testimonials/4.png",
  },
  {
    id: 5,
    name: "Sunbeam Academy",
    designation: "Soap Developer",
    image:
      "/images/testimonials/5.png",
  },
  {
    id: 6,
    name: "Rimika",
    designation: "The Explorer",
    image:
      "/images/testimonials/6.png",
  },
  {
    id: 7,
    name: "Dhanuka",
    designation: "The Explorer",
    image:
      "/images/testimonials/7.png",
  },
  {
    id: 8,
    name: "Dirdhar Das ",
    designation: "The Explorer",
    image:
      "/images/testimonials/8.png",
  },
  {
    id: 9,
    name: "Swarnam",
    designation: "The Explorer",
    image:
      "/images/testimonials/9.png",
  },
  {
    id: 10,
    name: "Hero",
    designation: "The Explorer",
    image:
      "/images/testimonials/10.png",
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
