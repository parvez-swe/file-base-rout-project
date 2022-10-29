import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
const FilteredEventsPage = () => {
  const router = useRouter();
  const filteredData = router.query.slug;
  if (!filteredData) {
    return <p>Loading...</p>;
  }
  const filterYear = filteredData[0];
  const filterMonth = filteredData[1];
  const numYear = +filterYear;
  const numMonth = +filterMonth;
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <p>Invalid filter. </p>
  }
  const filteredEvents = getFilteredEvents(
    {
      year:numYear,
      month: numMonth
    }
  );
  if(!filteredEvents || filteredEvents.length ===0){
    return<p>No Events found for the filter!</p>
  }
  return <div>
    <EventList items={filteredEvents} />
  </div>;
};

export default FilteredEventsPage;
