import { useRef } from "react";
import { star } from "../assets";

const GlowCard = ({ card, index, children }) => {
  const cardRefs = useRef([]);

  const handleMouseMove = (index) => (e) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

    angle = (angle + 360) % 360;

    card.style.setProperty("--start", angle + 60);
  };

  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseMove(index)}
      className="p-0.5 rounded-[2.5rem] bg-conic-gradient mb-5 break-inside-avoid-column"
    >
      <div className="card card-border timeline-card rounded-[2.25rem] p-10 bg-n-8 relative overflow-hidden">
        <div className="glow"></div>

        <div className="flex items-center gap-1 mb-5">
          {Array.from({ length: card.stars }, (_, i) => (
            <img key={i} src={star} alt="star" className="size-5" />
          ))}
        </div>

        <div className="mb-5">
          <p className="body-2 text-n-4 text-white">{card.review}</p>
        </div>

        {children}
      </div>
    </div>
  );
};

export default GlowCard;
