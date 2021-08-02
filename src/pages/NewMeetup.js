import NewMeetupForm from '../components/meetups/NewMeetupForm'
import { useHistory } from 'react-router-dom'

function NewMeetupPage () {
  const history = useHistory()

  function handleAddMeetup (meetupData) {
    fetch(
      'https://react-getting-started-c7b53-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: { 'Content-Type': 'application/json' }
      }
    ).then(() => {
      history.replace('/')
    })
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={handleAddMeetup} />
    </section>
  )
}
export default NewMeetupPage
