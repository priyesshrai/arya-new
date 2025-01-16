
import React from "react";
import { Cancel01Icon } from "hugeicons-react";

export default function Modal({modal, closeBtn}) {
  return (
    <section className={`contact-modal ${modal ? "show" : ""}`}>
      <div className="modal-wraper">
        <div className="modal-body">
          <form>
            <div className="input-container">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Name" />
            </div>
            <div className="input-container">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
              />
            </div>
            <div className="input-container">
              <label htmlFor="contact">Contact No</label>
              <input
                type="text"
                id="contact"
                name="contact"
                placeholder="+91 9324944234"
              />
            </div>
            <div className="input-container">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div
              className="input-container"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <button>SEND</button>
            </div>
          </form>
          <div className="close-btn" onClick={()=>closeBtn(false)}>
            <Cancel01Icon size={20} color={"#000000"} variant={"stroke"} />
          </div>
        </div>
      </div>
    </section>
  );
}
