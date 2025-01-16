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
                Hi, I’m Arya — a passionate{" "}
                <strong style={{ fontSize: "1.3rem" }}>
                  {" "}
                  Graphic Designer and UI/UX Designer{" "}
                </strong>
                with 2 years of experience transforming ideas into visually
                compelling designs. I specialize in branding, social media
                graphics, and intuitive UI/UX design that not only look stunning
                but also create meaningful user experiences.
              </p>
              <br />
              <p>
                Proficient in industry-leading tools like{" "}
                <strong style={{ fontSize: "1.3rem" }}>
                  Adobe Creative Suite (Photoshop, Illustrator, InDesign) and
                  Figma
                </strong>
                , I have a keen eye for detail and a creative approach to
                problem-solving. My goal is to deliver designs that connect with
                audiences and align with client goals.
              </p>
              <br />
              <p>
                Driven by curiosity and a love for innovation, I stay up-to-date
                with the latest design trends to bring fresh ideas to every
                project. Whether it’s crafting a memorable brand identity or
                designing a seamless user interface, I’m committed to delivering
                excellence in every pixel.
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
                <a href="https://www.linkedin.com/in/aryamaurya2014">
                  <NewTwitterIcon size={50} color={"#fff"} variant={"stroke"} />
                </a>
              </div>
            </div>
          </div>
          <div className="about-section-img">
            <Image src="/images/me.png" width={1000} height={500} alt="ARYA MAURYA" />
          </div>
        </div>
      </section>
    </div>
  );
}
