import CartWitget from "../Cartwitget/Cartwitget";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";

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
            <NavLink to='/category/vinos'className={( { isActive } ) => isActive ? 'btnCategoria' : 'btnActivo'}>Vinos</NavLink>
            <NavLink to='/category/cervezas'className={({ isActive }) => isActive ? 'btnCategoria' : 'btnActivo'}>Cervezas</NavLink>
            <NavLink to='/category/whiskies'className={({ isActive }) => isActive ? 'btnCategoria' : 'btnActivo'}>Whiskies</NavLink>
            <NavLink to='/category/gin'className={({ isActive }) => isActive ? 'btnCategoria' : 'btnActivo'}>Gin</NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
