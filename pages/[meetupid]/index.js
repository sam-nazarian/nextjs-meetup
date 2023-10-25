import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails() {
  return <MeetupDetail image='https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg' title='First Meetup' address='Some Street 5, Some City' description='This is a first meetup' />;
}

// For dynamic pages, if you use getStaticProps you are required to use the getStaticPaths()
export async function getStaticPaths() {
  return {
    // "false" causes anything that's not supported under the paths array to go to the 404 error
    // "true" nextJS will generate a page for the meetupId dynamically on the server

    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
}

//pre-generated during build process
// can't use react hooks in getStaticProps()
export async function getStaticProps(context) {
  //fetch data for a single meetup

  //context in getStaticProps() will not hold req & res objs but it will have a params key

  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
        id: meetupId,
        title: 'First Meetup',
        address: 'Some Street 5, Some City',
        description: 'This is a first meetup',
      },
    },
  };
}

export default MeetupDetails;
