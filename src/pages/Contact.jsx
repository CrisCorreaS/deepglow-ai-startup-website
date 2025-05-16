import ButtonGradient from "../assets/svg/ButtonGradient";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <ContactForm title="Contact Form" />
      </div>

      <ButtonGradient />
    </>
  );
};

export default Contact;
