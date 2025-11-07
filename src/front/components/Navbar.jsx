import { Link } from "react-router-dom";

export const Navbar = () => {
  const token = sessionStorage.getItem("token");

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">React Boilerplate</span>
        </Link>
        <div className="ml-auto">
          {!token && (
            <>
              <Link to="/signup"><button className="btn btn-outline-primary me-2">Sign Up</button></Link>
              <Link to="/login"><button className="btn btn-outline-success me-2">Login</button></Link>
            </>
          )}
          {token && (
            <>
              <Link to="/private"><button className="btn btn-outline-info me-2">Private</button></Link>
              <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
