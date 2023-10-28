import { MongoClient, ObjectId } from 'mongodb';
import { Fragment } from 'react';
import Head from 'next/head';

import MeetupDetail from '../../components/meetups/MeetupDetail';

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

export async function getStaticPaths() {
  const client = await MongoClient.connect('mongodb+srv://Sam:Q0tqIcdQL6tMw3dS@cluster0.lmjhspc.mongodb.net/meetups?retryWrites=true&w=majority');
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  // console.log(
  //   meetups.map((meetup) => ({
  //     params: { meetupid: meetup._id.toString() },
  //   }))
  // );

  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupid: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupid = context.params.meetupid;

  const client = await MongoClient.connect('mongodb+srv://Sam:Q0tqIcdQL6tMw3dS@cluster0.lmjhspc.mongodb.net/meetups?retryWrites=true&w=majority');
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupid),
  });

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
