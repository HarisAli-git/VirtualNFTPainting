import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Products Catalogue</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Post</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;
