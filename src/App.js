import { useEffect, useState } from "react"
import { Link, Route, Routes } from "react-router-dom"
import ContactsList from "./components/ContactsList"
import ContactsAdd from "./components/ContactsAdd"
import ContactsView from "./components/ContactsView"
import "./styles/styles.css"

export default function App() {
  const [contacts, setContacts] = useState([])
    console.log("State Contacts", contacts);
  
  useEffect(() => {
    fetch(`http://localhost:4000/contacts`)
    .then((response) => response.json())
    .then(data => {
    console.log("Contacts API", data)
    setContacts(data)
    }) 
  }, [])

  // DONE: Load all contacts on useEffect when component first renders

  return (
    <>
      <nav>
        <h2>Menu</h2>
        <ul>
          {/* TODO: Make these links */}
          <Link to="contactsPage">
            <li>Contacts List</li>
          </Link>
          <Link to="addContactPage">
          <li>Add New Contact</li>
          </Link>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<ContactsList contacts={contacts} />} />
          <Route path="/contactsPage" element={<ContactsList contacts={contacts} />} />
          {/* TODO: Add routes here  */}
        </Routes>
      </main>
    </>
  );
}
