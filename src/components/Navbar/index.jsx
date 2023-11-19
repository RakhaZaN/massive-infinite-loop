import { Link } from "react-router-dom";
import StyledNavbar from "./Navbar.styled";

function Navbar() {
  return (
    <StyledNavbar>
      <nav className="navbar">
        <div>
        <img className="ml-12 cursor-pointer" src={`/img/LOGO.png`} alt="Card image" />
        </div>
        <div>
          <ul>
            <li>
                <Link to="/">Beranda</Link>
            </li>
            <li>
                <Link to="/howheal/tentang">Tentang</Link>
            </li>
            <li>
                <Link to="/howheal/toko">Toko</Link>
            </li>
            <li>
                <Link to="/howheal/galeri">Galeri</Link>
            </li>
            <li>
                <Link to="/howheal/lacak">Lacak</Link>
            </li>
          </ul>
        </div>
      </nav>
    </StyledNavbar>
  );
}

export default Navbar;