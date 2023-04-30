import { HomePage } from '../src/components/home/home-page';

// video 2:45 - styles

const Home = ({data}) => {

  return (
    <div className="container">
      <HomePage data={data}/>
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
