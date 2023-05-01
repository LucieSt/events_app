import Link from "next/link";
import Image from "next/image";

const EventsPage = ({ data }) => {
  return (
    <div className="events_page">
      {data.map((city) => (
        <Link className="card" key={city.id} href={`/events/${city.id}`} passHref>
          <Image src={city.image} alt={city.title} width={350} height={350} />
          <h2>{city.title}</h2>
        </Link>
      ))}
    </div>
  );
};

export default EventsPage;
