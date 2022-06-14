// Simula JSON
const products = [
  {
    id: "1",
    name: "D.V. Catena Malbec",
    price: "3000$",
    category: "vinos",
    img: "./images/catena.png",
    stock: 10,
    description: "Vino Malbec - 2019 - 750ml",
    description2:
      "Domingo Vicente Catena Malbec es un blend proveniente de uvas Malbec de dos diferentes viñedos. El viñedo Angelica aporta aromas de mermeladas de ciruelas maduras y moras negras, suavidad y volumen al paladar.La Pirámide entrega aromas de frutos negros de carozo y notas de especias como pimienta negra y clavo de olor",
  },
  {
    id: "2",
    name: "Imperial IPA",
    price: "220$",
    category: "cervezas",
    img: "./images/imperial.png",
    stock: 220,
    description: "Cerveza IPA - 473ml",
    description2:
      "La imperial IPA es una versión mucho más fuerte que una IPA, en alcohol, lúpulo y malta. Refleja el gusto de un mercado por el lúpulo y el amargor extremo. De tonos vivaces que van del ámbar al cobre, cristalinas, salvo las versiones con lupulado en seco (dry hoping). La espuma es generosa y duradera",
  },
  {
    id: "3",
    name: "Jack Daniels",
    price: "5500$",
    category: "whiskies",
    img: "./images/jack.png",
    stock: 10,
    description: "Whisky 750ml",
    description2:
      'El whisky se realiza con agua subterránea sacada de una cueva en Tennessee, además al whisky se lo somete a un proceso llamado "charcoal mellowing" que consiste en filtrarlo a través de carbón de arce sacarino que lo convierte en lo que es: un Tennessee Whisky y no en un Bourbon, licor con el que se lo confunde por su suavidad a pesar de su alta graduación alcohólica',
  },
  {
    id: "4",
    name: "Heraclito",
    price: "2250$",
    category: "gin",
    img: "./images/hera.png",
    stock: 10,
    description: "Gin London Dry - 750ml",
    description2:
      "Heraclito: Es un gin de corte tradicional sujeto a reglamentaciones especificas para calificar dentro de la categoría London Dry. Desde suelo Argentino y de la mano de su creador, Julian Varea, nace este gin compuesto por 13 botánicos Aromáticamente brinda una salida firme de enebro y coriandro que se combina con notas cítricas provenientes de componentes como el limón, la lima y la naranja Curazao",
  },
];

// Exportamos con una Promesa de 2 segundos, los articulos / Simula API
export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products); // resuelve un array de objetos
    }, 500);
  });
};
// Funcion para tomar el categoryid y filtrar el catalogo - Se puede unir con getProducts

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products.filter(prod => prod.category === categoryId)) // resuelve un array de objetos
      }, 500);
    });
  };
  

export const getProductsById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === id));
    }, 500);
  });
};
