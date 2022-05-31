import './Item.css'
const Item = ({ name, img, description}) => {
  return (
      <div class='container'>
        <li class='cardContainer'>
      {name}
      <img class='imgProd'src={img} alt="img" />
      <p>{description}</p>
        </li>
    </div>
  );
};

export default Item;
