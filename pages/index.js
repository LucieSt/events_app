import { HomePage } from "../src/components/home/home-page";

// video 4:02 extracting our data from json, then posting there email

const Home = ({ data }) => {
  return (
    <div className="container">
      <HomePage data={data} />
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  const { events_categories } = await import("/data/data.json");

  return {
    props: {
      data: events_categories,
    },
  };
}
