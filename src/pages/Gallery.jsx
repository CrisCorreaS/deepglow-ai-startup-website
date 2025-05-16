import ButtonGradient from "../assets/svg/ButtonGradient";
import Section from "../components/Section";
import Heading from "../components/Heading";
import ImgGallery from "../components/ImgGallery";
import { Gradient } from "../components/design/Roadmap";
import { hackathonImageList, ethicsImageList } from "../constants";
import { GradientLight } from "../components/design/Benefits";

const Contact = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Section>
          <GradientLight />

          <Heading
            className="md:max-w-md lg:max-w-2xl"
            title="Our Event Gallery"
          />
          <ImgGallery
            images={hackathonImageList}
            title="12-Hour Sustainability Hackathon"
            initialExpandedIndex={1}
          />
        </Section>
        <Section>
          <Heading tag="Past Events" title="Events 2025" />
          <Gradient />

          <ImgGallery
            images={ethicsImageList}
            title="AI Ethics & Responsibility Roundtable"
            initialExpandedIndex={6}
          />
        </Section>
      </div>

      <ButtonGradient />
    </>
  );
};

export default Contact;
