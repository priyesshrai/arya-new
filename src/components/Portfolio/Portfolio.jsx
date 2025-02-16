"use client";
import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Image from "next/image";
import Link from "next/link";
import Fancybox from "../ImageZoom/Fancybox";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("Brand Board");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <section className="section" id="portfolio">
      <div className="section-wraper">
        <div className="section-heading">
          <h2
            style={{
              textAlign: "center",
              fontSize: "3.5rem",
              lineHeight: 1.2,
              fontFamily: "var(--font-syne)",
              fontWeight: "700",
            }}
            className="port-he"
          >
            Showcasing My Journey: Timeless Designs and Evolving Experiences
          </h2>
        </div>

        <div className="section-tabs-container">
          <div className="section-tabs-wraper">
            {["Brand Board", "Instagram Post", "Banner", "Newspaper Ads"].map(
              (tab) => (
                <div
                  key={tab}
                  className={`section-tab ${
                    activeTab === tab ? "section-tab-active" : ""
                  }`}
                  onClick={() => handleTabClick(tab)}
                >
                  <span>{tab}</span>
                </div>
              )
            )}
          </div>
        </div>

        <div className="section-cards-container" style={{ marginTop: "50px" }}>
          <div
            className="section-cards-wraper"
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            {tabContent[activeTab].map((card, index) => (
              <div className={`card ${activeTab === 'Instagram Post' ? "insta-card" : ""} `} key={index}>
                <Fancybox>
                  <div data-fancybox="gallery" href={card?.imageUrl}>
                    <Image
                      src={card.imageUrl}
                      width={1000}
                      height={1000}
                      alt="image"
                    />
                  </div>
                </Fancybox>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const tabContent = {
  "Brand Board": [
    {
      imageUrl: "/images/bb/1.jpg",
    },
    {
      imageUrl: "/images/bb/2.jpg",
    },
    {
      imageUrl: "/images/bb/3.jpg",
    },
    {
      imageUrl: "/images/bb/4.jpg",
    },
    {
      imageUrl: "/images/bb/5.jpg",
    },
    {
      imageUrl: "/images/bb/6.jpg",
    },
    {
      imageUrl: "/images/bb/7.jpg",
    },
    {
      imageUrl: "/images/bb/8.jpg",
    },
    {
      imageUrl: "/images/bb/9.jpg",
    },
  ],
  "Instagram Post": [
    {
      imageUrl: "/images/insta/1.png",
    },
    {
      imageUrl: "/images/insta/2.png",
    },
    {
      imageUrl: "/images/insta/3.png",
    },
    {
      imageUrl: "/images/insta/4.png",
    },
    {
      imageUrl: "/images/insta/5.png",
    },
    {
      imageUrl: "/images/insta/6.png",
    },
    {
      imageUrl: "/images/insta/7.png",
    },
    {
      imageUrl: "/images/insta/8.png",
    },
    {
      imageUrl: "/images/insta/9.png",
    },
    {
      imageUrl: "/images/insta/10.png",
    },
    {
      imageUrl: "/images/insta/11.png",
    },
    {
      imageUrl: "/images/insta/12.png",
    },
    {
      imageUrl: "/images/insta/13.png",
    },
    {
      imageUrl: "/images/insta/14.png",
    },
    {
      imageUrl: "/images/insta/15.png",
    },
    {
      imageUrl: "/images/insta/16.png",
    },
    {
      imageUrl: "/images/insta/17.png",
    },
    {
      imageUrl: "/images/insta/18.png",
    },
    {
      imageUrl: "/images/insta/19.jpg",
    },
    {
      imageUrl: "/images/insta/20.png",
    },
    {
      imageUrl: "/images/insta/21.png",
    },
    {
      imageUrl: "/images/insta/22.png",
    },
    {
      imageUrl: "/images/insta/23.png",
    },
    {
      imageUrl: "/images/insta/24.png",
    },
    {
      imageUrl: "/images/insta/25.png",
    },
  ],
  "Banner": [
    {
      imageUrl: "/images/banner/1.png",
    },
    {
      imageUrl: "/images/banner/2.png",
    },
    {
      imageUrl: "/images/banner/3.png",
    },
    {
      imageUrl: "/images/banner/4.png",
    },
    {
      imageUrl: "/images/banner/5.png",
    },
    {
      imageUrl: "/images/banner/6.png",
    },
  ],
  "Newspaper Ads": [
    {
      imageUrl: "/images/np/1.png",
    },
    {
      imageUrl: "/images/np/2.png",
    },
    {
      imageUrl: "/images/np/3.png",
    },
    {
      imageUrl: "/images/np/4.png",
    },
    {
      imageUrl: "/images/np/5.png",
    },
  ],
};
