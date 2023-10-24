import { useEffect, useState } from 'react';

import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a first meetup!',
  },
  {
    id: 'm2',
    title: 'A First Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 10, 12345 Some City',
    description: 'This is a first meetup!',
  },
];

function HomePage(props) {
  /*
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  // useEffect executes the callback function AFTER the component function was executed
  // nextJS returns the result of the first component render cycle (which is an empty page), rather than the fully rendered page
  // pre-render data
  useEffect(() => {
    // send a http request and fetch data
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);
  */

  return <MeetupList meetups={props.meetups} />;
}

// Code will never end up on the client side, runs before the HomePage component\
//data fetching is now on the server-side
export async function getStaticProps() {
  // Fetch data from an API

  // must return a props obj
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
    //uses incremental static generation, 10 is the number of seconds it waits before it re-generates the page for incoming requests and would replace the old pre-generated pages (helpful as you wouldn't need to re-deploy)
  };
}

export default HomePage;
