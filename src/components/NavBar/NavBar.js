import CartWitget from "../Cartwitget/Cartwitget";

const NavBar = () => {
  return (
    <div class="title">
      <nav>
        <h1
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "10px",
            fontFamily: "Sans-Serif",
          }}
        >
          FULLESCABIO
        </h1>
        <h3>Almacen de bebibas</h3>
        <div>
          <CartWitget />
        </div>
        <div class="buttonstConteiner" style={{backgroundColor: "black"}}>
          <button class='btnCategoria' >Vinos</button>
          <button class='btnCategoria'>Espumantes</button>
          <button class='btnCategoria'>Whiskies</button>
          <button class='btnCategoria'>Gin</button>
          <button class='btnCategoria'>Aperitivos</button>
          <button class='btnCategoria'>Ron</button>
          <button class='btnCategoria'>Vodka</button>
          <button class='btnCategoria'>Cervezas</button>
          
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
