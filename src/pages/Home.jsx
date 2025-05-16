import ButtonGradient from "../assets/svg/ButtonGradient";
import Hero from "../components/Hero";
import Roadmap from "../components/Roadmap";
import Testimonials from "../components/Testimonials";
import ContactForm from "../components/ContactForm";


const Home = () => {
  return (
    <>
      <main className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Hero />
        <Roadmap />
        <Testimonials />
        <ContactForm />
      </main>
      <ButtonGradient />
    </>
  );
};

export default Home;
