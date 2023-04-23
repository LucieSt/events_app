import Image from "next/image";

const EventPage = ({data}) => {
  return (
    <>
			{data.map((event) => {
				return (
					<div key={event.id}>
						<Image src={event.image} alt={event.title} width={400} height={400} />
						<h2>{event.title}</h2>
						<p>{event.description}</p>
					</div>
				)
			})}
    </>
  );
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
	const events = allEvents.filter((event) => {
    return event.id === context.params.id;
  });

  return {
    props: {
      data: events,
    },
  };
};