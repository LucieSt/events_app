import Link from "next/link";
import Image from "next/image";

export const HomePage = ({ data }) => {

	return (
		<div className="home_body">
			{data.map((city) => (
				<Link className="card" key={city.id} href={`/events/${city.id}`} passHref>
					<div className="image">
						<Image src={city.image} alt={city.title} width={400} height={300} />
					</div>
					<div className="content">
						<h2>{city.title}</h2>
						<p>{city.description}</p>
					</div>
				</Link>
			))}
		</div>
	)
};
