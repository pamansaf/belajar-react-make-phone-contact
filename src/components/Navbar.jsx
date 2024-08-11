import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center border-b-2 border-indigo-400 py-4 text-color">
      <h1 className=" font-bold text-3xl">Phone Contact</h1>
      <div className="flex gap-4">
        <NavLink to="/" ativeClassName="active">
          Home
        </NavLink>
        <NavLink to="/react" activeClassName="active">
          Learn React
        </NavLink>
        <NavLink to="/create" activeClassName="active">
          New Contact
        </NavLink>
      </div>
    </nav>
  );
}
