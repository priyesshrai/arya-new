"use client";
import React, { useState } from "react";
import { Cancel01Icon } from "hugeicons-react";
import toast, { Toaster } from "react-hot-toast";
import Spinner from "../loading-spinner/Spinner";
import axios from "axios";

export default function Modal({ modal, closeBtn }) {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setContactData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    toast.promise(
      axios
        .post("/api/contact", contactData, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          if (response.status === 200) {
            setContactData({
              name: "",
              email: "",
              message: "",
              contact: "",
            });
            closeBtn(false)
          }
        })
        .catch((error) => {
          console.log("Error sending message", error.message);
          throw error;
        })
        .finally(() => {
          setLoading(false);
        }),
      {
        loading: "Sending message...",
        success:
          "Your message is successfully sent. I will connect u soon.....!",
        error: "Error sending message. Please try again.",
      }
    );
  }

  return (
    <section className={`contact-modal ${modal ? "show" : ""}`}>
      <div className="modal-wraper">
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                value={contactData.name}
                id="name"
                name="name"
                placeholder="Name"
                onChange={handleChange}
              />
            </div>
            <div className="input-container">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                value={contactData.email}
                onChange={handleChange}
              />
            </div>
            <div className="input-container">
              <label htmlFor="contact">Contact No</label>
              <input
                type="text"
                id="contact"
                name="contact"
                placeholder="+91 9324944234"
                value={contactData.contact}
                onChange={handleChange}
              />
            </div>
            <div className="input-container">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="Your Message"
                value={contactData.message}
                onChange={handleChange}
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
              <button>{loading ? <Spinner /> : "Send ↗"}</button>
            </div>
          </form>
          <div className="close-btn" onClick={() => closeBtn(false)}>
            <Cancel01Icon size={20} color={"#000000"} variant={"stroke"} />
          </div>
        </div>
      </div>
      <Toaster />
    </section>
  );
}
