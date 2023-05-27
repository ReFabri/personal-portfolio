import { useState, useRef } from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import Modal from "../UI/Modal";
import emailjs from "@emailjs/browser";
import i18n from "../../translate/i18n";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMsgSuccess, setIsMsgSuccess] = useState(false);
  const form = useRef();

  const whatsappUrl = `https://wa.me/${5511972305109}?text=${encodeURIComponent(
    i18n.t("contact.whatsMsg")
  )}`;

  const modalMsg = {
    success: (
      <Modal>
        <h2>{i18n.t("contact.modalH2Success")}</h2>
        <h3 style={{ margin: "2rem 0" }}>{i18n.t("contact.modalH3Success")}</h3>
        <button className="btn btn-primary">
          {i18n.t("contact.modalBtn")}
        </button>
      </Modal>
    ),
    error: (
      <Modal>
        <h2>{i18n.t("contact.modalH2Error")}</h2>
        <h3 style={{ margin: "2rem 0" }}>{i18n.t("contact.modalH3Error")}</h3>
        <button className="btn btn-primary">
          {i18n.t("contact.modalBtn")}
        </button>
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
      <h5>{i18n.t("contact.titleH5")}</h5>
      <h2>{i18n.t("contact.titleH2")}</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>renato.f.fabri@gmail.com</h5>
            <a
              href="mailto:renato.f.fabri@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {i18n.t("contact.bigBtnMsg")}
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+(55)(11) 97230-5109</h5>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              {i18n.t("contact.bigBtnMsg")}
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <input
            type="text"
            name="name"
            placeholder={i18n.t("contact.formNamePlaceholder")}
            required
          />
          <input
            type="email"
            name="email"
            placeholder={i18n.t("contact.formEmailPlaceholder")}
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder={i18n.t("contact.formMsgPlaceholder")}
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            {i18n.t("contact.formBtn")}
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
