import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav className="flex justify-between">
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="/users">Users</NavLink>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
}
