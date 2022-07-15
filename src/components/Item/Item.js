import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ name, img, description, id }) => {
  return (
    <div className="cardContainer">
      <h2>{name}</h2>
      <div>
        <Link to={`/detail/${id}`}>
          <img className="imgProd" src={img} alt="" />
        </Link>
      </div>
      <p>{description}</p>
      <Link to={`/detail/${id}`}>Ver detalle</Link>
    </div>
  );
};

export default Item;
