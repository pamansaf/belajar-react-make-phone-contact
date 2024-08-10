import Api from "../api/contactApi";

const ContactList = ({ contacts, setContacts, title, onDelete }) => {
  const handleDeletecontact = (id) => {
    Api.delete("http://localhost:3000/contacts/" + id).then(() => {
      onDelete(id);
    });
  };

  return (
    <div className="py-4">
      <h3 className="font-bold text-color text-lg pb-3 ">{title}</h3>
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
            <button
              onClick={() => handleDeletecontact(contact.id)}
              className="btn-del"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
