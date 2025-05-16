import Section from "./Section";
import Heading from "./Heading";
import Tagline from "./Tagline";
import { grid } from "../assets";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Info = ({
  showHeading = true,
  headingTitle = "News & Updates",
  headingText = "Explore the most recent updates, insights and innovations in AI and beyond.",
  sectionTitle = "Latest News",
  items = [],
  itemLinkPrefix = "/news",
  gridOpacity = 20
}) => {
  return (
      <Section className="container pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        {showHeading && (
          <Heading
            className="md:max-w-md lg:max-w-2xl mt-10"
            title={headingTitle}
            text={headingText}
          />
        )}

        {sectionTitle && <h2 className="h3 mb-10">{sectionTitle}</h2>}
        
        <div className="relative grid gap-6 md:grid-cols-3 md:gap-8">
          {items.map((item) => (
            <Link
              to={`${itemLinkPrefix}/${item.id}`}
              key={item.id}
              className="group p-0.25 rounded-[2.5rem] bg-n-6 hover:bg-conic-gradient transition-all"
            >
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-10 h-full">
                <div className="absolute top-0 left-0 max-w-full">
                  <img
                    className="w-full"
                    src={grid}
                    width={550}
                    height={550}
                    alt="Grid"
                    style={{ opacity: gridOpacity / 100 }}
                  />
                </div>
                <div className="relative z-1">
                  {item.date && <Tagline>{item.date}</Tagline>}
                  {item.imageUrl && (
                    <div className="mb-6 mt-4">
                      <img
                        className="w-full rounded-xl"
                        src={item.imageUrl}
                        alt={item.title}
                      />
                    </div>
                  )}
                  {item.title && <h4 className="h4 mb-2">{item.title}</h4>}
                  {item.subtitle && <p className="body-2 text-n-4">{item.subtitle}</p>}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>
  );
};

Info.propTypes = {
  showHeading: PropTypes.bool,
  headingTitle: PropTypes.string,
  headingText: PropTypes.string,
  sectionTitle: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      date: PropTypes.string,
      imageUrl: PropTypes.string,
      title: PropTypes.string,
      subtitle: PropTypes.string
    })
  ),
  itemLinkPrefix: PropTypes.string,
  gridOpacity: PropTypes.number
};

export default Info;