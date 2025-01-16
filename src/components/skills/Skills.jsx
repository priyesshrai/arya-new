import React from "react";
import { BackgroundLines } from "../ui/background-lines";
import Image from "next/image";

export default function Skills() {
  return (
    <section className="section">
      <div className="section-wraper" style={{ flexDirection: "row" }}>
        <div className="section-heading">
          <BackgroundLines />
          <h2 style={{ textAlign: "center" }}>Tools I Use</h2>
        </div>

        <div className="section-card-container">
            <div className="section-card">
                <Image src='/images/figma.png' width={5000} height={5000} alt="figma"/>
            </div>
            <div className="section-card">
                <Image src='/images/ps.png' width={5000} height={5000} alt="figma"/>
            </div>
            <div className="section-card">
                <Image src='/images/tools/01.png' width={5000} height={5000} alt="figma"/>
            </div>
            <div className="section-card">
                <Image src='/images/tools/02.png' width={5000} height={5000} alt="figma"/>
            </div>
            <div className="section-card">
                <Image src='/images/tools/03.png' width={5000} height={5000} alt="figma"/>
            </div>
            <div className="section-card">
                <Image src='/images/tools/04.png' width={5000} height={5000} alt="figma"/>
            </div>
            <div className="section-card">
                <Image src='/images/canva.png' width={5000} height={5000} alt="figma"/>
            </div>
            <div className="section-card">
                <Image src='/images/tools/05.png' width={5000} height={5000} alt="figma"/>
            </div>
            <div className="section-card">
                <Image src='/images/tools/06.png' width={5000} height={5000} alt="figma"/>
            </div>
            <div className="section-card">
                <Image src='/images/tools/07.png' width={5000} height={5000} alt="figma"/>
            </div>
            <div className="section-card">
                <Image src='/images/tools/08.png' width={5000} height={5000} alt="figma"/>
            </div>
            <div className="section-card">
                <Image src='/images/tools/09.png' width={5000} height={5000} alt="figma"/>
            </div>
        </div>
      </div>
    </section>
  );
}
