import Image from 'next/image';
import Link from 'next/link';

const EventsPage = ({data}) => {
	return (
		<div>
			<h1>Events page</h1>

			{data.map((city) => (
				<Link key={city.id} href={`/events/${city.id}`} passHref>
					<Image src={city.image} alt={city.title} width={200} height={170} />
					<h2>{city.title}</h2>
				</Link>
			))}
		</div>
	)
};

export default EventsPage;

export async function getStaticProps() {
	const {events_categories} = await import('data/data.json');

	return {
		props:{
			data: events_categories,
		}
	}
}