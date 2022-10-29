import React from "react";
import Link from "next/link";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { getAllEvents } from "../../dummy-data";
import { useRouter } from "next/router";
const Index = () => {
  const events = getAllEvents();
  const router = useRouter();

  const eventSearchHandler =(year, month)=>{
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }
  return (
    <>
      <EventsSearch onSearch={eventSearchHandler} />
      <EventList items={events} />
    </>
  );
};

export default Index;
