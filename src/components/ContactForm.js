import React from "react"
import "../assets/styles/contactForm.css"

function ContactForm() {
  return (
    <article className="form-wrapper">
      <div>
        <h4>
          If you'd like to start a conversation or find out more please get in
          touch below and I get back to you as soon as possible
        </h4>
      </div>
      <form
        className="contact-form"
        action="https://formspree.io/f/xqkwdeow"
        method="POST"
      >
        <div className="form-row">
          <label htmlFor="name">name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="form-row">
          <label htmlFor="email">email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div className="form-row">
          <label htmlFor="message">message</label>
          <textarea name="message" id="message"></textarea>
        </div>
        <button type="submit" className="black-btn contact-btn">
          submit
        </button>
      </form>
    </article>
  )
}

export default ContactForm
