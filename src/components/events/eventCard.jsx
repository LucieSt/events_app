import Image from "next/image";

const SingleEvent = ({ data }) => {
  return (
    <div key={data.id}>
      <h2>{data.title}</h2>
      <Image src={data.image} alt={data.title} width={1000} height={500} />
      <p>{data.description}</p>
			<label>Get registered for this event!</label>
      <input type="email" />
      <button>Submit</button>
    </div>
  );
};

export default SingleEvent;
