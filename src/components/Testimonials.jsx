import { useEffect, useState } from "react";
import Section from "./Section";
import Heading from "./Heading";
import GlowCard from "./GlowCard";
import { GradientLight } from "../components/design/Benefits";
import supabase from "../helper/supabaseClient";
import TestimonialForm from "./TestimonialForm";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const { data, error } = await supabase
        .from("testimonials")
        .select("*")
        .order("created_at", { ascending: true });

      if (error) {
        console.error("Error fetching testimonials:", error);
      } else {
        setTestimonials(data);
      }
    };

    fetchTestimonials();
  }, []);

  const handleNewTestimonial = (newTestimonial) => {
    setTestimonials((prev) => [...prev, newTestimonial]);
  };

  return (
    <Section crosses id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <Heading
          tag="What People Say About Us?"
          title="Customer feedback highlights"
        />
        <GradientLight />
        <div className="lg:columns-3 md:columns-2 columns-1 mt-16 mr-10 ml-10">
          {testimonials.map((testimonial, index) => (
            <GlowCard card={testimonial} key={testimonial.id} index={index}>
              <div className="flex items-centre gap-3">
                <div>
                  {testimonial.img_path && (
                    <img
                      src={testimonial.img_path}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  )}
                </div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="body-2 text-n-4">{testimonial.mentions}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
      <TestimonialForm onNewTestimonial={handleNewTestimonial} />
    </Section>
  );
};

export default Testimonials;
