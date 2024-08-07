import dataImg from "../data/data";


function Collect({ image, name, size, format }) {
  return (
    <div className="collection">
      <img src={image} alt={name} />
      <h4 className="title-card">{name}</h4>
      <h5>{size}</h5>
      <h6>{format}</h6>
    </div>
  );
}


export default Collect;

