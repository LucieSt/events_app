import Link from "next/link";
import Image from "next/image";

export const HomePage = ({ data }) => {

	return (
		<div className="home_body">
			{data.map((city) => (
				<Link className="card" key={city.id} href={`/events/${city.id}`} passHref>
					<Image src={city.image} alt={city.title} width={200} height={170} />
					<h2>{city.title}</h2>
					<p>{city.description}</p>
				</Link>
			))}
		</div>
	)
};
