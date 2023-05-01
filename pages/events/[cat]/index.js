import EventCat from "../../../src/components/events/eventCat";

const EventsCatPage = ({ data }) => {
  return <EventCat data={data} />
};

export default EventsCatPage;

export async function getStaticPaths() {
  const { events_categories } = await import("/data/data.json");
  const allPaths = events_categories.map((city) => {
    return {
      params: {
        cat: city.id.toString(),
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { allEvents } = await import("/data/data.json");

  const events = allEvents.filter((event) => {
    return event.city === context.params.cat;
  });

  return {
    props: {
      data: events,
    },
  };
}
