import { useParams, Link } from "react-router-dom";
import Section from "../components/Section";
import Heading from "../components/Heading";
import PropTypes from 'prop-types';

const InfoDetail = ({ items, backLink }) => {
  const { id } = useParams();
  const item = items.find((item) => item.id === id);

  if (!item)
    return (
      <Section className="container pt-20">
        <p className="text-center text-n-4">Item not found.</p>
      </Section>
    );

  return (
    <Section className="container pt-24 pb-20 mx-auto mt-10">
      <div className="mb-10 mx-5">
        <Link
          to={backLink}
          className="inline-flex items-center gap-2 text-n-8 bg-n-1 rounded-full px-6 py-2 text-sm font-semibold hover:bg-n-2 transition-all group w-fit mb-10"
        >
          <svg
            className="w-4 h-4 transition-transform group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          Back
        </Link>
      </div>

      <Heading
        className="text-4xl font-semibold leading-tight text-n-1 mb-6"
        tag={item.date}
        title={item.title}
      />

      {item.imageUrl && (
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full rounded-3xl shadow-xl mb-10"
        />
      )}

      <p className="body-1 text-n-3 leading-relaxed whitespace-pre-line">
        {item.content.trim()}
      </p>
    </Section>
  );
};

InfoDetail.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      date: PropTypes.string,
      imageUrl: PropTypes.string,
      title: PropTypes.string,
      subtitle: PropTypes.string,
      content: PropTypes.string
    })
  ).isRequired,
  backLink: PropTypes.string.isRequired
};

export default InfoDetail;