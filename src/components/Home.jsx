import React, { useState } from "react";
import Navbar from "./Navbar";
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
  ]);
  return (
    <div className="w-1/2 min-h-screen mx-auto">
      <Navbar />
      <div className="py-4">
        <h3 className="font-bold text-indigo-500 text-xl pb-3 ">
          Contact List
        </h3>
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="flex justify-between items-center text-sm bg-indigo-100 my-2 px-4 py-1 border border-indigo-200 rounded-md"
          >
            <div>
              <p className="">Name : {contact.name}</p>
              <p>Phone : {contact.phone}</p>
            </div>
            <div className="flex gap-2">
              <button className="btn-edit">Edit</button>
              <button className="btn-del">Delete</button>
            </div>
          </div>
        ))}
        <button className="btn mt-3">Add Contact</button>
      </div>
    </div>
  );
}
