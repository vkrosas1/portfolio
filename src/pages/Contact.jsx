import { UserData } from "../data/UserData";
import "../styles/Contact.css";

function Contact() {
  const { FooterLink } = UserData;
  return (
    <div className="contact-container">
      <div className="contact-container_text">
        <h2 className="contact-container_header">Get In Touch</h2>
        <p className="contact-container_description">
          I'm always open to new challenges and opportunities to make a
          difference. Feel free to explore my work and reach out—I'd love to
          connect!
        </p>

        <button
          onClick={() => {
            window.open(FooterLink);
          }}
          className="contact-container_button"
        >
          Connect Now 🚀
        </button>
      </div>
    </div>
  );
}

export default Contact;
