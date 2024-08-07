import React, { useState } from "react";

const Object = () => {
  const [person, setPerson] = useState({
    name: "Safwan",
    age: 20,
    address: {
      address1: "Bireuen",
      address2: "Aceh",
    },
  });
  const handleUpdate = () => {
    setPerson({
      ...person,
      age: "25",
      address: {
        ...person.address,
        address2: "Banda Aceh",
      },
    });
  };
  return (
    <div className=" border-t border-indigo-500 py-4">
      <h3 className="font-bold pb-2">Use State = Object</h3>
      <p>Name : {person.name}</p>
      <p>Age : {person.age}</p>
      <p>Address:</p>
      <ul className="list-disc list-inside ml-4">
        <li>{person.address.address1}</li>
        <li>{person.address.address2}</li>
      </ul>
      <button onClick={handleUpdate} className="btn mt-2">
        Update
      </button>
    </div>
  );
};

export default Object;
