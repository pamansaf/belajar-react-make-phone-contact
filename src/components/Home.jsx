import React, { useState, useEffect } from "react";
import Api from "../api/contactApi";
import Navbar from "./Navbar";
import ContactList from "./ContactList";

export default function Home() {
  const fecthContact = () => {
    Api.get("http://localhost:3000/contacts")
      .then((res) => {
        setContacts(res.data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const [contacts, setContacts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fecthContact();
  }, []);

  return (
    <div className="w-1/2 min-h-screen mx-auto">
      <Navbar />
      {loading && <div className="pt-5">Loading...</div>}
      {error && <div className="pt-5 text-red-500">{error}</div>}
      {contacts && (
        <ContactList
          contacts={contacts}
          title="All Contacts"
          onDelete={fecthContact}
          setContacts={setContacts}
        />
      )}
    </div>
  );
}
