import { NavLink } from "react-router-dom";
import StyledNavbar from "./Navbar.styled";

function Navbar() {
  return (
    <StyledNavbar>
      <nav className="navbar">
        <div>
          <img className="ml-12 cursor-pointer" src={`/img/LOGO.png`} alt="Card image" />
        </div>
        <div>
          <ul className="font-semibold">
            <li>
              <NavLink exact to="/" activeClassName="active">
                Beranda
              </NavLink>
            </li>
            <li>
              <NavLink to="/howheal/tentang" activeClassName="active">
                Tentang
              </NavLink>
            </li>
            <li>
              <NavLink to="/howheal/toko" activeClassName="active">
                Toko
              </NavLink>
            </li>
            <li>
              <NavLink to="/howheal/galeri" activeClassName="active">
                Galeri
              </NavLink>
            </li>
            <li>
              <NavLink to="/howheal/lacak" activeClassName="active">
                Lacak
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </StyledNavbar>
  );
}

export default Navbar;
