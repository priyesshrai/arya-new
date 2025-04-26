import React from "react";
import { InstagramIcon } from "hugeicons-react";
import { NewTwitterIcon } from "hugeicons-react";
import { Linkedin02Icon } from "hugeicons-react";
import Image from "next/image";

export default function About() {
  return (
    <div className="w-full  bg-grid-small-white/[0.3] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#0a0a0a] [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
      <section className="section">
        <div className="section-wraper" style={{ flexDirection: "row" }}>
          <div className="about-section-description">
            <div className="section-heading">
              <h2>About Me</h2>
            </div>
            <div className="section-description">
              <p>
                Hello ji I&apos;m a{" "}
                <strong className="abut-higlite-text">
                  Creative Media Specialist
                </strong>{" "}
                with over 2 year plus of experience turning ideas into visually
                compelling designs. I specialize in branding, social media
                graphics, video editing, and UI design. Throughout my career,
                I&apos;ve worked with over{" "}
                <strong className="abut-higlite-text">15+ clients</strong> and
                created more than{" "}
                <strong className="abut-higlite-text">1000+ designs,</strong>{" "}
                focusing on not just making things look great, but also ensuring
                they create meaningful experiences for users.
              </p>
              <br />
              <p>
                I&apos;m proficient in tools like <strong className="abut-higlite-text">Adobe Creative Suite
                (Photoshop, Illustrator, InDesign), Canva, and Figma</strong>. With a
                sharp eye for detail and a creative problem-solving mindset, I
                aim to deliver designs that not only grab attention but also
                align perfectly with the goals and needs of my clients.
              </p>
            </div>
            <div className="section-social-media">
              <span>Follow Me</span>
              <div className="social-logo">
                <a href="https://www.instagram.com/arya_m_aurya/">
                  <InstagramIcon size={50} color={"#fff"} variant={"stroke"} />
                </a>
                <a href="https://www.linkedin.com/in/aryamaurya2014">
                  <Linkedin02Icon size={50} color={"#fff"} variant={"stroke"} />
                </a>
                {/* <a href="https://www.linkedin.com/in/aryamaurya2014">
                  <NewTwitterIcon size={50} color={"#fff"} variant={"stroke"} />
                </a> */}
              </div>
            </div>
          </div>
          <div className="about-section-img">
            <Image
              src="/images/photo.png"
              width={1000}
              height={500}
              alt="ARYA MAURYA"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
