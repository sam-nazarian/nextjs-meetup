// our-domain.com/new-meetup
import { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    //absolute path, as api is on the same server
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    console.log(data);
    // console.log(enteredMeetupData);

    // router.replace(); //replace won't allow going back by the back button
    router.push('/');
  }

  return (
    <Fragment>
      <Head>
        {/* Add a title to a window */}
        <title>Add a New Meetup</title>
        <meta name='description' content='Add your own meetups and create amazing networking opportunities.' />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
}

export default NewMeetupPage;
