"use client";
import React, { useState } from "react";
import { HoverEffect } from "../ui/card-hover-effect";

export default function Services() {
  const [activeTab, setActiveTab] = useState("Branding and Identity");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="w-full bg-dot-white/[0.5] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#0a0a0a] [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
      <div className="section">
        <div className="section-wraper" style={{ flexDirection: "row" }}>
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
              Empowering Brands Through Exceptional Design
            </h2>
          </div>

          <div className="section-tabs-container">
            <div className="section-tabs-wraper">
              {[
                "Branding and Identity",
                "Marketing and Advertising",
                "Web and Digital Design",
                "Print and Packaging Design",
              ].map((tab) => (
                <div
                  key={tab}
                  className={`section-tab ${
                    activeTab === tab ? "section-tab-active" : ""
                  }`}
                  onClick={() => handleTabClick(tab)}
                >
                  <span>{tab}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="section-cards-container">
            <div className="section-cards-wraper">
              <HoverEffect items={tabContent[activeTab]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const tabContent = {
  "Branding and Identity": [
    {
      title: "Logo Design",
      description:
        "Crafting a unique and memorable logo that encapsulates the essence of your brand. A well-designed logo serves as the cornerstone of your brand's visual identity, creating a lasting impression on your audience.",
    },
    {
      title: "Brand Style Guides",
      description:
        "Developing comprehensive brand style guides that ensure consistency across all visual elements. These guides include specifications for logos, colors, typography, and imagery, ensuring cohesive branding across all platforms.",
    },
    {
      title: "Business Cards and Stationery",
      description:
        "Designing professional business cards and stationery that reflect your brand’s identity. These tangible items leave a lasting impression, promoting your business in a memorable and impactful way.",
    },
  ],
  "Marketing and Advertising": [
    {
      title: "Social Media Graphics",
      description:
        "Creating visually appealing graphics for social media platforms to engage your audience. These graphics are tailored to each platform’s specifications, ensuring maximum impact and user engagement.",
    },
    {
      title: "Flyers, Posters, and Brochures",
      description:
        "Designing compelling flyers, posters, and brochures that effectively communicate your marketing message. These materials are perfect for promotions, events, and direct customer engagement.",
    },
    {
      title: "Email Templates and Newsletters",
      description:
        "Developing customized email templates and newsletters to enhance your email marketing efforts. These designs aim to boost open rates and conversions by presenting your content in an engaging and visually appealing manner.",
    },
    {
      title: "Advertisement Banners",
      description:
        "Designing eye-catching advertisement banners for both digital and print mediums. These banners are optimized for visibility and effectiveness, helping to drive traffic and increase conversions.",
    },
  ],
  "Web and Digital Design": [
    {
      title: "Website Design (Layouts, UI/UX Mockups)",
      description:
        "Creating intuitive and aesthetically pleasing website layouts and UI/UX mockups. These designs focus on enhancing user experience while maintaining the visual integrity of your brand.",
    },
    {
      title: "App Interface Design",
      description:
        "Designing user-friendly interfaces for mobile and web applications. These designs prioritize usability and aesthetics, ensuring a seamless user experience that aligns with your brand’s identity.",
    },
    {
      title: "Infographics",
      description:
        "Crafting informative and visually engaging infographics that simplify complex information. Infographics are a powerful tool for storytelling, data visualization, and enhancing content marketing strategies.",
    },
    {
      title: "Presentation Design",
      description:
        "Designing impactful presentations for PowerPoint and Keynote that captivate your audience. These designs ensure clarity, visual appeal, and effective communication of your key messages.",
    },
  ],
  "Print and Packaging Design": [
    {
      title: "Book Covers",
      description:
        "Designing visually striking book covers that grab attention and convey the essence of the content. A well-designed cover can significantly influence a book's appeal and sales potential.",
    },
    {
      title: "Product Packaging",
      description:
        "Creating innovative and attractive product packaging that stands out on shelves. Packaging design is crucial for product differentiation and plays a significant role in influencing purchase decisions.",
    },
    {
      title: "Magazine Layouts",
      description:
        "Designing cohesive and engaging magazine layouts that enhance readability and visual flow. These designs consider typography, imagery, and content structure to create an immersive reading experience.",
    },
    {
      title: "Menu Design",
      description:
        "Designing visually appealing and easy-to-navigate menus that enhance the dining experience. A well-designed menu helps communicate the restaurant’s brand and influences customer choices.",
    },
  ],
};
