import ButtonGradient from "../assets/svg/ButtonGradient";
import Services from "../components/Services";
import NewsInfo from "../components/Info";
import { news } from "../constants";

const News = () => {
  return (
    <>
      <NewsInfo
        items={news}
        headingTitle="News & Updates"
        headingText="Explore the most recent updates, insights and innovations in AI and beyond."
        sectionTitle="Latest News"
        itemLinkPrefix="/news"
        gridOpacity="80"
      />
      <Services />
      <ButtonGradient />
    </>
  );
};

export default News;
