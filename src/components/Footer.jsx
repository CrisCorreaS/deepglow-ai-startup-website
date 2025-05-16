import { Link } from "react-router-dom";
import Section from "./Section";
import ButtonSvg from "../assets/svg/ButtonSvg";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()} Deepglow. All rights reserved.
        </p>

        <div className="flex items-center gap-6 flex-wrap justify-center">
          <ul className="flex gap-5 flex-wrap">
            {socials.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
              >
                <img
                  src={item.iconUrl}
                  width={16}
                  height={16}
                  alt={item.title}
                />
              </a>
            ))}
          </ul>
          <Link
            to="/login"
            className="button relative inline-flex items-center justify-center h-11 px-7 text-sm font-semibold uppercase font-code text-white hover:text-color-1 transition-colors"
          >
            <span className="relative z-20">Login</span>
            {ButtonSvg(false)}
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
