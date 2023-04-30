import Link from "next/link";
import Image from "next/image";

export const Header = () => (
  <header>
		<div className="topNav">
			<Image alt='logo' src={'/images/autrique_house.jpeg'} width={50} height={50} />
			<nav>
				<ul>
					<li>
						<Link href="/" passHref>
						Home
						</Link>
					</li>
					<li>
						<Link href="/events" passHref>
							Events
						</Link>
					</li>
					<li>
						<Link href="/about-us" passHref>
							About us
						</Link>
					</li>
				</ul>
			</nav>
		</div>
		<h1>Title of our page</h1>
  </header>
);
