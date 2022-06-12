
import './ItemDetail.css'
const ItemDetail = ({ id, name, img, description2 }) => {
  // resibe por props el id y el nombre del producto
  return (
    <>
      <div className="DetailItem">
        <h2>{name}</h2>
        <img className='ImagenItem'src={img} alt='' />
        <div>{description2}</div>
      </div>
    </>
  );
};

export default ItemDetail;
