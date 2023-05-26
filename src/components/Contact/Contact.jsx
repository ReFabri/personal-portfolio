import { useState, useRef } from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import Modal from "../UI/Modal";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMsgSuccess, setIsMsgSuccess] = useState(false);
  const form = useRef();

  //TODO Fix the message based on the selected i18n language
  const whatsappUrl = `https://wa.me/${5511950591975}?text=${encodeURIComponent(
    "Hello!"
  )}`;

  const modalMsg = {
    success: (
      <Modal>
        <h2>Email sent successfully</h2>
        <h3 style={{ margin: "2rem 0" }}>
          Thank you for contacting me. I will get back to you soon.
        </h3>
        <button className="btn btn-primary">Close</button>
      </Modal>
    ),
    error: (
      <Modal>
        <h2>Something went wrong..</h2>
        <h3 style={{ margin: "2rem 0" }}>
          Please try again later, or if you prefer try another contact option.
        </h3>
        <button className="btn btn-primary">Close</button>
      </Modal>
    ),
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "service_mjavqmo",
        "template_0lqesiq",
        form.current,
        "BdDkSHXIbVXe0M3V1"
      );
      setIsMsgSuccess(true);
      setIsModalOpen(true);
    } catch (error) {
      console.log(error);
      setIsMsgSuccess(false);
      setIsModalOpen(true);
    }

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>renato.f.fabri@gmail.com</h5>
            <a
              href="mailto:renato.f.fabri@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+(55)(11) 97230-5109</h5>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
        {isModalOpen && (
          <div onClick={() => setIsModalOpen(false)}>
            {isMsgSuccess ? modalMsg.success : modalMsg.error}
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
