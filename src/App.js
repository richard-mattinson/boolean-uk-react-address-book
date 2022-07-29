import { useEffect, useState } from "react"
import { Link, Route, Routes } from "react-router-dom"
import ContactsList from "./components/ContactsList"
import ContactsAdd from "./components/ContactsAdd"
import ContactsView from "./components/ContactsView"
import ContactsEdit from "./components/ContactsEdit"
import "./styles/styles.css"

export default function App() {
  const [contacts, setContacts] = useState([]);
  console.log("State Contacts", contacts);

  useEffect(() => {
    fetch(`http://localhost:4000/contacts`)
      .then((response) => response.json())
      .then((data) => {
        // console.log("Contacts API", data);
        setContacts(data);
      });
  }, []);

  //DONE: Load all contacts on useEffect when component first renders

  return (
    <>
      <nav>
        <h2>Menu</h2>
        <ul>
          {/* DONE: Make these links */}
          <Link to="/">
            <li>Contacts List</li>
          </Link>
          <Link to="/contacts/add">
            <li>Add New Contact</li>
          </Link>
        </ul>
      </nav>
      <main>
          {/* DONE: Add routes here  */}
        <Routes>
          <Route path="/" element={<ContactsList contacts={contacts} />} />
          <Route
            path="/contacts"
            element={<ContactsList contacts={contacts} />
            }
          />
          <Route
            path="/contacts/add"
            element={
              <ContactsAdd contacts={contacts} setContacts={setContacts} />
            }
          />
          <Route 
            path="/contacts/:id"
            element={<ContactsView />
            } 
          />
          <Route
            path="/contacts/:id/:edit" 
            element={<ContactsEdit contacts={contacts} setContacts={setContacts} />
            } 
          />
        </Routes>
      </main>
    </>
  );
}
