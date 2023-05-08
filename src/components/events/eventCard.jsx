import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef } from "react";

const SingleEvent = ({ data }) => {
  const inputEmail = useRef();
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const emailValue = inputEmail.current.value;
    const eventId = router?.query.id;

    try {
      // POST fetch request
      const response = await fetch("/api/email-registration", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email: emailValue, eventId }),
      });

      if (!response.ok) throw new Error(`error: ${response.status}`);
      const data = await response.json();
      console.log("POST: ", data);
    } catch (e) {
      console.log("ERROR", e);
    }
  };

  return (
    <div className="event_single_page">
      <h2>{data.title}</h2>
      <Image src={data.image} alt={data.title} width={1000} height={500} />
      <p>{data.description}</p>

      <form onSubmit={onSubmit} className="email_registration">
        <label>Get registered for this event!</label>
        <input
          ref={inputEmail}
          type="email"
          id="email"
          placeholder="Please insert you email here"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SingleEvent;
