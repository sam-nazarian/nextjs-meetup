import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails() {
  return <MeetupDetail image='https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg' title='First Meetup' address='Some Street 5, Some City' description='This is a first meetup' />;
}

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
