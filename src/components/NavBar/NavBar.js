import CartWitget from "../Cartwitget/Cartwitget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div >
      <nav>
        <h1 class="title">FULLESCABIO</h1>
        <h3>Almacen de bebibas</h3>
        <div class="menu_conteiner">
          <div>
            <CartWitget />
          </div>
          <div class="buttonstConteiner" style={{ backgroundColor: "black" }}>
            <button class="btnCategoria">Vinos</button>
            <button class="btnCategoria">Cervezas</button>
            <button class="btnCategoria">Whiskies</button>
            <button class="btnCategoria">Gin</button>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
