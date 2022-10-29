import React from "react";
import Link from "next/link";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { getAllEvents } from "../../dummy-data";
const index = () => {
  const events = getAllEvents();
  return (
    <>
      <EventsSearch />
      <EventList items={events} />
    </>
  );
};

export default index;
