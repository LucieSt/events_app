import Image from 'next/image';

const Home = ({data}) => {

  return (
    <div className="container">
      <header>
        <nav>
          <img />
          <a href="/">Home</a>
          <a href="/events">Events</a>
          <a href="/about-us">About us</a>
        </nav>
      </header>

      <main>

				{data.map((city) => (
					<a key={city.id} href={`/events/${city.id}`}>
						<Image src={city.image} alt={city.title} width={200} height={170} />
						<h2>{city.title}</h2>
						<p>{city.description}</p>
					</a>
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
