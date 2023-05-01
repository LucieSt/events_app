import Image from "next/image";
import Link from "next/link";

const EventCat = ({ data }) => {
  return (
    <div className="cat_events">
			<h1>Events in ...</h1>
      <div className="events_content">
        {data.map((event) => {
          return (
            <Link
              className="card"
              key={event.id}
              href={`/events/${event.city}/${event.id}`}
              passHref
            >
              <Image
                src={event.image}
                alt={event.title}
                width={370}
                height={370}
              />
              <h2>{event.title}</h2>
              <p>{event.description}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default EventCat;
