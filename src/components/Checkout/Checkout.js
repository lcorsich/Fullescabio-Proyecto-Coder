import "./Checkout.css";
import { useState, useContext } from "react";
import {
  guardarOrden,
  getProductosCatalogo,
  confirmarOrden,
} from "../../services/firebase";

import CartContext from "../../context/cartContex";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Checkout = () => {
  const { cart, totalQuantity, clearCart } = useContext(CartContext);
  const [cargando, setCargando] = useState(false);
  const navigate = useNavigate();

  const [valores, setValores] = useState({
    nombre: "",
    direccion: "",
    correo: "",
    telefono: "",
  });

  const handleChange = (evt) => {
    // funcion que toma datos nombre - valor
    const { target } = evt;
    const { name, value } = target;
    setValores({ ...valores, [name]: value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    let isIncomplete = false;

    for (const valor in valores) {
      if (valores[valor] === "") {
        isIncomplete = true;
      }
    }

    if (isIncomplete) {
      Swal.fire(
        "Datos incompletos",
        "Debes completar todos los campos para confirmar tu compra.",
        "error"
      );
      setCargando(false);
    } else {
      handleCrearOrden();
    }
  };

  const handleCrearOrden = () => {
    const idsEnCarrito = cart.map((prod) => prod.id);

    const productosConStock = [];
    const productosSinStock = [];

    setCargando(true);

    //Revisar stock
    getProductosCatalogo(idsEnCarrito)
      .then((response) => {
        response.docs.forEach((doc) => {
          const productoCatalogo = doc.data();
          const stockActualProductoCatalogo = productoCatalogo.stock;

          const productoCarrito = cart.find((prod) => prod.id === doc.id);
          const cantidadSeleccionadaProductoCarrito = productoCarrito.cantidad;

          if (
            stockActualProductoCatalogo >= cantidadSeleccionadaProductoCarrito
          ) {
            productosConStock.push({
              referencia: doc.ref,
              nuevoStock:
                stockActualProductoCatalogo -
                cantidadSeleccionadaProductoCarrito,
            });
          } else {
            productosSinStock.push({ id: doc.id, producto: productoCatalogo });
          }
        });
      })
      .then((_) => {
        //Si hay stock para satisfacer la orden
        if (productosSinStock.length === 0) {
          //creo la orden
          const orden = {
            comprador: {
              nombre: valores.nombre,
              email: valores.correo,
              telefono: valores.telefono,
              direccion: valores.direccion,
            },
            items: cart,
            total: totalQuantity,
          };
          //guardo la orden
          guardarOrden(orden).then(({ id }) => {
            //una vez creada la orden, actualizo stocks
            confirmarOrden(productosConStock);
            //limpio el cart
            clearCart();
            //notifico ID de Orden al usuario
            Swal.fire({
              title: "Orden creada exitosamente!",
              html: `Tu ID de Orden es: <br><br><b>${id}</b><br><br>Vas a necesitarla para seguir tu envío`,
              icon: "success",
            });
            setCargando(false);
            //redirecciono al usuario al home
            setTimeout(() => {
              navigate("/");
            }, 1500);
          });
        } else {
          //Notifico al usuario que no es posible satisfacer su orden. Problemente haya cambiado el stock
          console.log("Error al crear la orden");
          setCargando(false);
        }
      });
  };

  if (cargando) {
    return (
      <div>
        <h1>Cargando...</h1>
      </div>
    );
  }

  return (
    <>
      <div class="wrapper">
        <div class="container">
          <form action=""></form>
          <h1 class="title_check">
            <i></i>
            DATOS DEL ENVIO
          </h1>
          <div className="formCheckout__container">
            <form className="formCheckout">
              <input
                type="text"
                placeholder="Nombre y Apellido"
                className="fromCheckout__input"
                onChange={handleChange}
                name="nombre"
                value={valores.nombre}
              />
              <input
                type="text"
                placeholder="Dirección"
                className="fromCheckout__input"
                onChange={handleChange}
                name="direccion"
                value={valores.apellido}
              />
              <input
                type="text"
                placeholder="Correo"
                className="fromCheckout__input"
                onChange={handleChange}
                name="correo"
                value={valores.correo}
              />
              <input
                type="text"
                placeholder="Teléfono"
                className="fromCheckout__input"
                onChange={handleChange}
                name="telefono"
                value={valores.telefono}
              />
              <div>
                <button onClick={handleSubmit} className="btnSave">
                  confirmar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
