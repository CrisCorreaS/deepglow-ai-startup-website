import { useState } from "react";
import supabase from "../helper/supabaseClient";
import Section from "./Section";
import Heading from "./Heading";
import Button from "./Button";

const TestimonialForm = ({ onNewTestimonial }) => {
  const [form, setForm] = useState({
    name: "",
    mentions: "",
    review: "",
    stars: 5,
    img_path: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    const dataToInsert = {
      ...form,
      stars: Number(form.stars),
      img_path: form.img_path.trim() === ""
        ? "https://i.pinimg.com/736x/49/2d/09/492d0995bd45a945b2b5e96833e7feec.jpg"
        : form.img_path,
    };

    const { data, error } = await supabase.from("testimonials").insert([dataToInsert]).select();

    if (error) {
      console.error(error);
      setStatus("❌ Error submitting the testimonial.");
    } else {
      setStatus("✅ Testimonial submitted successfully!");
      if (onNewTestimonial && data && data[0]) {
        onNewTestimonial(data[0]); 
      }
      setForm({
        name: "",
        mentions: "",
        review: "",
        stars: 5,
        img_path: "",
      });
    }
  };

  return (
    <Section>
      <Heading
        tag="Share your experience"
        title="Submit your testimonial"
        text="Your feedback helps us improve. Thank you for placing your trust in us!"
      />

      <div className="p-0.5 rounded-[2.5rem] bg-conic-gradient max-w-md mx-auto ">
        <div className="rounded-[2.25rem] bg-n-8 p-8 relative overflow-hidden border border-n-6/20 shadow-lg">
          {status && (
            <div className="text-centre text-sm mb-4 text-n-3">{status}</div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
              className="p-3 rounded-lg bg-n-10 text-n-1 placeholder:text-n-4 border border-n-6/30 focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <input
              type="text"
              name="mentions"
              placeholder="@username"
              value={form.mentions}
              onChange={handleChange}
              required
              className="p-3 rounded-lg bg-n-10 text-n-1 placeholder:text-n-4 border border-n-6/30 focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <textarea
              name="review"
              placeholder="Write your review..."
              value={form.review}
              onChange={handleChange}
              required
              rows={4}
              className="p-3 rounded-lg bg-n-10 text-n-1 placeholder:text-n-4 border border-n-6/30 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />

            <input
              type="number"
              name="stars"
              min="1"
              max="5"
              placeholder="Rating (1–5)"
              value={form.stars}
              onChange={handleChange}
              required
              className="p-3 rounded-lg bg-n-10 text-n-1 placeholder:text-n-4 border border-n-6/30 focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <input
              type="text"
              name="img_path"
              placeholder="Image URL (optional)"
              value={form.img_path}
              onChange={handleChange}
              className="p-3 rounded-lg bg-n-10 text-n-1 placeholder:text-n-4 border border-n-6/30 focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <Button type="submit" white>
              Submit Testimonial
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default TestimonialForm;
