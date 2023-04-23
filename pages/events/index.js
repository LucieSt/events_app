import Image from 'next/image';

const EventsPage = ({data}) => {
	return (
		<div>
			<h1>Events page</h1>

			{data.map((city) => (
				<a key={city.id} href={`/events/${city.id}`}>
					<Image src={city.image} alt={city.title} width={200} height={170} />
					<h2>{city.title}</h2>
				</a>
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