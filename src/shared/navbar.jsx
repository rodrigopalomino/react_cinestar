import { Link } from "react-router-dom";
import "../components/style.css";
import logoCinestar from "../assets/varios/logo-cinestar.png";
import icoFacebook from "../assets/varios/ico-face.png";
import icoTwitter from "../assets/varios/ico-twitter.png";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg p-0">
        <div className="w-100">
          <div className="nav-superior">
            <Link className="navbar-brand logo" to="/">
              <img src={logoCinestar} alt="" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#miNavbar"
              aria-controls="miNavbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ background: "white" }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse" id="miNavbar">
            <ul className="navbar-nav w-75 d-flex justify-content-around align-items-center m-auto">
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="/peliculas/cartelera">
                  Cartelera
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="/peliculas/estrenos">
                  Proximos estrenos
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link fw-bold"
                  href="http://www.cinestar.com.pe/starcard"
                >
                  Star Card
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="/cines">
                  Nuestros Cines
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link fw-bold"
                  href="http://www.cinestar.com.pe/ventas_corporativas"
                >
                  Ventas Corporativas
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link fw-bold"
                  href="http://www.cinestar.com.pe/promociones"
                >
                  Promociones
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link fw-bold"
                  href="http://www.cinestar.com.pe/cinefilo_star"
                >
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <div className="d-flex align-items-center">
                  <a className="nav-link fw-bold">Siguenos en:</a>

                  <a href="https://www.facebook.com/multicinestar">
                    <img src={icoFacebook} alt="" />
                  </a>

                  <a href="https://twitter.com/multicinestar">
                    <img src={icoTwitter} alt="" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
