import { MongoClient, ObjectId } from 'mongodb';
import MeetupDetail from '../../components/meetups/MeetupDetail';
import { Fragment } from 'react';
import Head from 'next/head';

function MeetupDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name='description' content={props.meetupData.description} />
      </Head>

      <MeetupDetail image={props.meetupData.image} title={props.meetupData.title} address={props.meetupData.address} description={props.meetupData.description} />
    </Fragment>
  );
}

/*
  getStaticPaths: Determines the paths for the dynamic routes that need to be pre-rendered.
  getStaticProps: Fetches the required data for the paths determined by getStaticPaths so that each page gets pre-rendered with its specific data.
*/

// For dynamic pages, if you use getStaticProps you are required to use the getStaticPaths()
export async function getStaticPaths() {
  const client = await MongoClient.connect('mongodb+srv://Sam:Q0tqIcdQL6tMw3dS@cluster0.lmjhspc.mongodb.net/meetups?retryWrites=true&w=majority');
  const db = client.db();
  const meetupsCollection = db.collection('meetups');

  // the first find() param is for filtering a collection, _id:1 means that only include id and no other values
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    // "false" causes anything that's not supported under the paths array to go to the 404 error
    // "true" nextJS will generate a page for the meetupId dynamically on the server

    fallback: false,
    paths: meetups.map((meetup) => ({ params: { meetupId: meetup._id.toString() } })),

    // [
    //   {
    //     params: {
    //       meetupId: 'm1',
    //     },
    //   },
    //   {
    //     params: {
    //       meetupId: 'm2',
    //     },
    //   },
    // ],
  };
}

//pre-generated during build process
// can't use react hooks in getStaticProps()
export async function getStaticProps(context) {
  //fetch data for a single meetup

  //context in getStaticProps() will not hold req & res objs but it will have a params key

  const meetupId = context.params.meetupId; //this is a String

  // console.log(meetupId);

  const client = await MongoClient.connect('mongodb+srv://Sam:Q0tqIcdQL6tMw3dS@cluster0.lmjhspc.mongodb.net/meetups?retryWrites=true&w=majority');
  const db = client.db();
  const meetupsCollection = db.collection('meetups');

  // To properly look for an ID, which is a String we first need to convert it to ObjectId
  const selectedMeetup = await meetupsCollection.findOne({ _id: new ObjectId(meetupId) }); //in mongoDB id's are object

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetails;
