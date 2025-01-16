import React from "react";
import { InstagramIcon } from "hugeicons-react";
import { NewTwitterIcon } from "hugeicons-react";
import { Linkedin02Icon } from "hugeicons-react";

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
                Hi, I’m Arya — a passionate Graphic Designer and UI/UX Designer
                with 2 years of experience transforming ideas into visually
                compelling designs. I specialize in branding, social media
                graphics, and intuitive UI/UX design that not only look stunning
                but also create meaningful user experiences.
              </p>
              <p>
                Proficient in industry-leading tools like Adobe Creative Suite
                (Photoshop, Illustrator, InDesign) and Figma, I have a keen eye
                for detail and a creative approach to problem-solving. My goal
                is to deliver designs that connect with audiences and align with
                client goals.
              </p>
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
                <a href="#">
                  <InstagramIcon size={50} color={"#fff"} variant={"stroke"} />
                </a>
                <a href="#">
                  <NewTwitterIcon size={50} color={"#fff"} variant={"stroke"} />
                </a>
                <a href="#">
                  <Linkedin02Icon size={50} color={"#fff"} variant={"stroke"} />
                </a>
              </div>
            </div>
          </div>
          <div className="about-section-img"></div>
        </div>
      </section>
    </div>
  );
}
