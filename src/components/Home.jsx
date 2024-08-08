import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import ContactList from "./ContactList";
export default function Home() {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Ahmad",
      phone: "081234567890",
    },
    {
      id: 2,
      name: "Safwan",
      phone: "081234567890",
    },
    {
      id: 3,
      name: "Siti",
      phone: "081234567890",
    },
    {
      id: 4,
      name: "Aisyah",
      phone: "081234567890",
    },
  ]);

  const [blockContacts, setBlockContas] = useState([
    {
      id: 4,
      name: "Aisyah",
      phone: "081234567890",
    },
  ]);

  const handleDelete = (id) => {
    const filteredContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(filteredContacts);
  };

  console.log("component di rendered");

  useEffect(() => {
    console.log("useeffect is called");
  }, []);

  return (
    <div className="w-1/2 min-h-screen mx-auto">
      <Navbar />
      <ContactList
        contacts={contacts}
        title="All Contacts"
        onDelete={handleDelete}
        setContacts={setContacts}
      />
      <ContactList
        contacts={blockContacts}
        title="Block Contacts"
        onDelete={handleDelete}
        setContacts={setContacts}
      />
    </div>
  );
}
