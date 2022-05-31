// Simula JSON
const products = [{
    id:'1',
    name:'D.V. Catena Malbec',
    price:'3000',
    category:'vinos',
    img:'./images/catena.png',
    stock: 10,
    description:'Vino Malbec - 2019 - 750ml'
},
{
    id:'2',
    name:'Imperial IPA',
    price:'220',
    category:'Cervezas',
    img:'./images/imperial.png',
    stock: 220,
    description:'Cerveza IPA - 473ml'
},
{
    id:'3',
    name:'Jack Daniels',
    price:'5500',
    category:'Whiskies',
    img:'./images/jack.png',
    stock: 10,
    description:'Whisky 750ml' 
},
{
    id:'4',
    name:'Heraclito',
    price:'2250',
    category:'Gin',
    img:'./images/hera.png',
    stock: 10,
    description:'Gin London Dry - 750ml' 
}]

// Exportamos con una Promesa de 2 segundos, los articulos / Simula API 
export const getProducts = () =>{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}