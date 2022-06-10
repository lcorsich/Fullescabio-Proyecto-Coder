import CartWitget from "../Cartwitget/Cartwitget";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav>
        <Link to='/'>
          <h1 className="title">FULLESCABIO</h1>
        </Link>
        <h3>Almacen de bebibas</h3>
        <div className="menu_conteiner">
          <div>
            <CartWitget />
          </div>
          <div className="categoryConteiner">
            <Link to='/category/vinos'className="btnCategoria">Vinos</Link>
            <Link to='/category/cervezas'className="btnCategoria">Cervezas</Link>
            <Link to='/category/whiskies'className="btnCategoria">Whiskies</Link>
            <Link to='/category/gin'className="btnCategoria">Gin</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
