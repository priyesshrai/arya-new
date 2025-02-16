import { InstagramIcon, Linkedin02Icon, NewTwitterIcon } from "hugeicons-react";
import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="footer-base">
        <span>
          &copy; {new Date().getFullYear()} ARYA |
        </span>
          <a href="#">
            <InstagramIcon size={20} color={"#fff"} variant={"stroke"} />
          </a>
          <a href="#">
            <NewTwitterIcon size={20} color={"#fff"} variant={"stroke"} />
          </a>
          <a href="#">
            <Linkedin02Icon size={20} color={"#fff"} variant={"stroke"} />
          </a>
          {/* <span> | Meet Developer <a href="https://www.linkedin.com/in/priyessh-rai/" target="_blank" style={{color:"#25AFF3"}}>PRIYESSH RAI</a> </span> */}
      </div>
    </footer>
  );
}
