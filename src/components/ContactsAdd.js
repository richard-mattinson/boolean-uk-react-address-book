import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ContactsAdd(props) {
  // console.log("Add Props", props);

  // setContacts and contacts must be passed as props
  // to this component so new contacts can be added to the
  // state
  const { contacts, setContacts } = props;
  const [newContact, setNewContact] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
  });
  const navigate = useNavigate();

  //DONE: Implement controlled form
  //send POST to json server on form submit

  function handleChange(event) {
    const { name, value } = event.target;
    // console.log("Name & Value", name, value);
    setNewContact({ ...newContact, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
      const body = JSON.stringify(newContact)
      // console.log("New Contact", newContact, body);

    // DONE: Insert another fetch here for posting the new contact details to JSON
    fetch(`http://localhost:4000/contacts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newContact),
      // Turn each provided line into a string to be posted to the JSON server
    })
      .then((response) => {
        // console.log("Response", response);
        return response.json()
      })
      .then((data) => {
        // console.log("Data", data)
        setContacts([...contacts, newContact])
      });
    navigate("/");
    // useNavigate hook moves the user back to the Dash when the HireForm function is run through submitting the below form
  }

  return (
    <form className="form-stack contact-form" onSubmit={handleSubmit}>
      <h2>Create Contact</h2>

      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        required
        value={newContact.firstName}
        onChange={handleChange}
      />

      <label htmlFor="lastName">Last Name:</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        required
        value={newContact.lastName}
        onChange={handleChange}
      />

      <label htmlFor="street">Street:</label>
      <input
        id="street"
        name="street"
        type="text"
        required
        value={newContact.street}
        onChange={handleChange}
      />

      <label htmlFor="city">City:</label>
      <input
        id="city"
        name="city"
        type="text"
        required
        value={newContact.city}
        onChange={handleChange}
      />

      <div className="actions-section">
        <button className="button blue" type="submit">
          Create
        </button>
      </div>
    </form>
  );
}

export default ContactsAdd;
