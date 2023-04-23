import Image from "next/image";

const EventsCatPage = ({ data }) => {
  return (
    <div>
      {data.map((event) => {
        return (
          <a key={event.id} href={`/events/${event.city}/${event.id}`}>
						<Image src={event.image} alt={event.title} width={200} height={170} />
            <h2>{event.title}</h2>
						<p>{event.description}</p>
          </a>
        );
      })}
    </div>
  );
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
