import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function ContactsView() {
  const [contact, setContact] = useState(false)

  //TODO: Get the contact to load from the params and fetch.
  //With useEffect, load the contact when params changes
  //and update contact state

  const {id} = useParams()
  console.log("What Params?", useParams());
  // id is in params

  useEffect(() => {
    fetch(`http://localhost:4000/contacts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("View Contacts API", data);
        setContact(data);
      });
  }, [id]);
  // stop useEffect running once id is found

  if (!contact) {
    return <p>Loading</p>
  }

  return (
    <div>
      <h2>
        {contact.firstName} {contact.lastName}
      </h2>
      <p>
        {contact.street}, {contact.city}
      </p>
      <hr />
      <p>
        <b>Works at:</b> {contact.studio}
      </p>
      <p>
        <b>Best Known for:</b> {contact.bestKnown}
      </p>
      <p>
        <b>Honker!:</b> {contact.honker}
      </p>
    </div>
  );
}

export default ContactsView