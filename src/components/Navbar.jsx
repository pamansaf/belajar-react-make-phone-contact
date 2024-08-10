import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center border-b-2 py-4 text-color">
      <h1 className=" font-bold text-2xl">Phone Contact</h1>
      <div className="flex gap-4">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/react" className="nav-link">
          Learn React
        </Link>
        <Link to="/create" className="nav-link">
          New Contact
        </Link>
      </div>
    </nav>
  );
}
