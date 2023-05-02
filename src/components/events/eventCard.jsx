import Image from "next/image";
import React, { useRef } from "react";

const SingleEvent = ({ data }) => {

const inputEmail = useRef();

const onSubmit = (e) => {
	e.preventDefault();
	console.log(inputEmail)
};

  return (
    <div className="event_single_page">
      <h2>{data.title}</h2>
      <Image src={data.image} alt={data.title} width={1000} height={500} />
      <p>{data.description}</p>
			<form onSubmit={onSubmit} className="email_registration">
				<label>Get registered for this event!</label>
				<input ref={inputEmail} type="email" id="email" placeholder="Please insert you email here"/>
				<button type="submit">Submit</button>
			</form>
    </div>
  );
};

export default SingleEvent;
