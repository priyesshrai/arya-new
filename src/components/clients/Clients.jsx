import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export default function Clients() {
  return (
    // <section className="section">
    //   <div className="section-wraper">
        <div className="h-[30rem] w-full rounded-md flex flex-col antialiased bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
    //   </div>
    // </section>
  );
}
const testimonials = [
  {
    src:"/images/logo/1.png"
  },
  {
    src:"/images/logo/2.png"
  },
  {
    src:"/images/logo/3.png"
  },
  {
    src:"/images/logo/4.png"
  },
  {
    src:"/images/logo/5.png"
  },
  {
    src:"/images/logo/6.png"
  },
  {
    src:"/images/logo/7.png"
  },
  {
    src:"/images/logo/8.png"
  },
  {
    src:"/images/logo/9.png"
  },
  {
    src:"/images/logo/10.png"
  },
];
