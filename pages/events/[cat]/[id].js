import Image from "next/image";

const EventPage = ({data}) => {
  return (
    <>
			<div key={data.id}>
				<Image src={data.image} alt={data.title} width={1000} height={500} />
				<h2>{data.title}</h2>
				<p>{data.description}</p>
			</div>
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
	const eventData = allEvents.find((event) => {
    return event.id === context.params.id;
  });

  return {
    props: {
      data: eventData,
    },
  };
};