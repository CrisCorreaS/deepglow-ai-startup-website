import ButtonGradient from "../assets/svg/ButtonGradient";
import EventsInfo from "../components/Info";
import { current_events, past_events } from "../constants";
import { Gradient } from "../components/design/Roadmap";

const Events = () => {
  return (
    <>
      <EventsInfo
        items={current_events}
        headingTitle="Deepglow Events"
        headingText="Join us for insightful discussions, workshops and networking opportunities on the latest AI innovations shaping the future."
        sectionTitle="Upcoming Events"
        itemLinkPrefix="/events/current"
        gridOpacity="80"
      />
      <Gradient />

      <EventsInfo
        items={past_events}
        showHeading={false}
        sectionTitle="Past Events"
        itemLinkPrefix="/events/past"
        gridOpacity="80"
      />
      <ButtonGradient />
    </>
  );
};

export default Events;
