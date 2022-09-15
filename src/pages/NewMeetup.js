import { useNavigate } from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
  const navigate = useNavigate();
  const addMeetupHandler = (meetupData) => {
    fetch(
      'https://react-basics-vmuya-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(() => {
      navigate('/', { replace: true });
    });
  };

  return (
    <section>
      <h1>Add New meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetupPage;
