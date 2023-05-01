import SingleEvent from "../../../src/components/events/eventCard";

const EventPage = ({data}) => {
  return <SingleEvent data={data} />
};

export default EventPage;

export async function getStaticPaths() {
	const { allEvents } = await import("/data/data.json");
	const allPaths = allEvents.map((event) => {
    return {
      params: {
				cat: event.city.toString(),
        id: event.id.toString(),
      },
    };
  });

	return {
    paths: allPaths,
    fallback: false,
  };
};

export async function getStaticProps(context) {
	const { allEvents } = await import("/data/data.json");
	const eventData = allEvents.find((event) => {
    return event.id === context.params.id;
  });

  return {
    props: {
      data: eventData,
    },
  };
};