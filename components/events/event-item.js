import React from "react";
import Link from "next/link";
const EventItem = (props) => {
  const { title, image, date, location, id } = props;
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formatedAdress = location.replace(",", "\n");
  const exploreLink = `/event/${id}`;
  return (
    <li>
      <img src={"/" + image} alt={title} />
      <div>
        <div>
          <h2>TITLE</h2>
          <div>
            <time>Date</time>
          </div>
          <div>
            <address>ADDRESS</address>
          </div>
        </div>
        <div>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
