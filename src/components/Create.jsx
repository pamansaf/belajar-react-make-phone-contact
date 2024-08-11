import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Api from "../api/contactApi";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Create() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      Api.get("http://localhost:3000/contacts/" + id).then((res) => {
        const { data } = res;
        setName(data.name);
        setPhone(data.phone);
      });
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = { name, phone };

    setLoading(true);
    if (id) {
      updateContact(contact);
    } else {
      createContact(contact);
    }
  };

  const createContact = (contact) => {
    Api.post("http://localhost:3000/contacts", contact).then(() => {
      setLoading(false);
    });
  };

  const updateContact = (contact) => {
    Api.put("http://localhost:3000/contacts/" + id, contact).then(() => {
      setLoading(false);
    });
  };

  return (
    <div className="w-1/2 min-h-screen mx-auto">
      <Navbar />
      <div>
        <h3 className="font-bold text-color text-lg py-4">
          {id ? "Update" : "Add"} Contact
        </h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-semibold">
              Contact Name*
            </label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              required
              className="outline-1 outline-indigo-400 py-1 px-3 rounded border border-indigo-300"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="text-sm font-semibold">
              Phone Number*
            </label>
            <input
              id="phone"
              type="number  "
              placeholder="Phone number"
              required
              className="outline-1 outline-indigo-400 py-1 px-3 rounded border border-indigo-300"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="flex gap-2">
            <Link to={"/"} className="btn-cancel">
              Cancel
            </Link>
            <button onClick={() => navigate(-1)} className="btn-submit">
              {loading ? "Submiting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
