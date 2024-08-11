import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center border-b-2 border-indigo-400 py-4 text-color">
      <h1 className=" font-bold text-3xl">Phone Contact</h1>
      <div className="flex gap-4">
        <NavLink to="/" ativeclassname="active">
          Home
        </NavLink>
        <NavLink to="/create" activeclassname="active">
          New Contact
        </NavLink>
        <NavLink to="/react" activeclassname="active">
          React
        </NavLink>
        <NavLink to="/formik-form" activeclassname="active">
          Form Validation
        </NavLink>
      </div>
    </nav>
  );
}
