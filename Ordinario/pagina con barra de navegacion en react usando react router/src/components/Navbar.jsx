import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <span className="navbar-brand">Mi Sitio</span>

        <div className="navbar-nav">
          <Link className="nav-link" to="/">Inicio</Link>
          <Link className="nav-link" to="/about">Acerca</Link>
          <Link className="nav-link" to="/contact">Contacto</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
