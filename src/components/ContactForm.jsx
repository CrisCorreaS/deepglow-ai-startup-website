// import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import Section from "./Section.jsx";
import useAlert from "../hooks/useAlert.js";
import Alert from "./Alert.jsx";
import { terminalDark, arrowUp } from "../assets/index.js";
import supabase from "../helper/supabaseClient";

const ContactForm = () => {
  const formRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    jobTitle: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const saveToSupabase = async (form) => {
    const { error } = await supabase.from("contact_messages").insert([
      {
        name: form.name,
        email: form.email,
        phone: form.phone,
        company: form.company,
        country: form.country,
        job_title: form.jobTitle,
        message: form.message,
      }
    ]);

    if (error) {
      throw error;
    }
  };

  // TODO: Implement the sendEmailNotification feature
  // const sendEmailNotification = async (form) => {
  //   await emailjs.send(
  //     import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
  //     import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
  //     {
  //       from_name: form.name,
  //       to_name: "Cristina Correa",
  //       from_email: form.email,
  //       to_email: "cristina.correa.segade@gmail.com",
  //       phone: form.phone,
  //       company: form.company,
  //       country: form.country,
  //       job_title: form.jobTitle,
  //       message: form.message,
  //     },
  //     import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
  //   );
  // };

  const resetForm = () => {
    setForm({
      name: "",
      email: "",
      phone: "",
      company: "",
      country: "",
      jobTitle: "",
      message: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await saveToSupabase(form);
      // await sendEmailNotification(form);

      showAlert({
        show: true,
        text: "Thank you for your message 😃",
        type: "success",
      });

      setTimeout(() => {
        hideAlert(false);
        resetForm();
      }, 3000);
    } catch (err) {
      console.error(err);

      showAlert({
        show: true,
        text: "I didn't receive your message 😢",
        type: "danger",
      });

      setTimeout(() => {
        hideAlert(false);
        resetForm();
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section
      className="c-space"
      id="contact"
      crosses
      customPaddings="py-10 lg:py-16 xl:py-20"
    >
      {alert.show && <Alert {...alert} />}

      <div className="relative flex items-center justify-center flex-col">
        <img
          src={terminalDark}
          alt="terminal-bg"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />

        <div className="contact-container relative z-10 w-full px-6 py-16 mt-14">
          <div className="mb-12 text-center">
            <h3 className="head-text">Let&apos;s talk</h3>
            <p className="text-lg text-white-600 mt-4 max-w-2xl mx-auto">
              Whether you&apos;re seeking to automate processes,
              enhance your systems or develop a bespoke AI solution
              from the ground up. We&apos;re here to help.
            </p>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            <div className="space-y-8">
              <label className="block">
                <span className="field-label block mb-3">Full Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="field-input terminal-input"
                  placeholder="ex., Cristina Correa"
                />
              </label>

              <label className="block">
                <span className="field-label block mb-3">Phone Number</span>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="field-input terminal-input"
                  placeholder="ex., +34 123 456 789"
                />
              </label>

              <label className="block">
                <span className="field-label block mb-3">Job Title</span>
                <input
                  type="text"
                  name="jobTitle"
                  value={form.jobTitle}
                  onChange={handleChange}
                  className="field-input terminal-input"
                  placeholder="ex., Project Manager"
                />
              </label>
            </div>

            <div className="space-y-8">
              <label className="block">
                <span className="field-label block mb-3">Email address</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="field-input terminal-input"
                  placeholder="ex., cris.correa@gmail.com"
                />
              </label>

              <label className="block">
                <span className="field-label block mb-3">Country</span>
                <input
                  type="text"
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  className="field-input terminal-input"
                  placeholder="ex., Spain"
                />
              </label>

              <label className="block">
                <span className="field-label block mb-3">Company Name</span>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  className="field-input terminal-input"
                  placeholder="ex., Acme Inc."
                />
              </label>
            </div>

            <div className="md:col-span-2 mt-8">
              <label className="block">
                <span className="field-label block mb-3">Project Details</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="field-input terminal-input"
                  placeholder="Share your project details or inquiries..."
                />
              </label>
            </div>

            <div className="md:col-span-2 flex justify-center mt-4">
              <button
                className="field-btn px-8 py-4 text-lg flex items-center gap-3 border-2 border-transparent hover:border-color-3 transition-all"
                type="submit"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
                <img src={arrowUp} alt="arrow-up" className="w-3 h-3" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default ContactForm;
