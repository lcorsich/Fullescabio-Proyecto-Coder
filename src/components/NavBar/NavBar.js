import CartWitget from "../Cartwitget/Cartwitget";
import "./NavBar";

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
            <button class="btnCategoria">Espumantes</button>
            <button class="btnCategoria">Whiskies</button>
            <button class="btnCategoria">Gin</button>
            <button class="btnCategoria">Aperitivos</button>
            <button class="btnCategoria">Ron</button>
            <button class="btnCategoria">Vodka</button>
            <button class="btnCategoria">Cervezas</button>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
