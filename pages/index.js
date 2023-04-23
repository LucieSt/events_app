import Image from 'next/image';
import Link from 'next/link';

const Home = ({data}) => {

  return (
    <div className="container">
      <header>
        <nav>
          <img />
          <Link href="/" passHref>Home</Link>
          <Link href="/events" passHref>Events</Link>
          <Link href="/about-us" passHref>About us</Link>
        </nav>
      </header>

      <main>

				{data.map((city) => (
					<Link key={city.id} href={`/events/${city.id}`} passHref>
						<Image src={city.image} alt={city.title} width={200} height={170} />
						<h2>{city.title}</h2>
						<p>{city.description}</p>
					</Link>
				))}

      </main>

      <footer>
        <p>created in April 2023</p>
      </footer>
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
	const {events_categories} = await import('/data/data.json');

  return {
    props: {
      data: events_categories,
    },
  };
}
