import dataImg from "../data/data";
import scvor from "../data/scvor";

let full = dataImg + scvor;

function Collect({ image, name }) {
  return (
    <div className="collection">
      <img src={image} alt={full.name} />
      <h4 className="title-card">{name}</h4>
    </div>
  );
}


export default Collect;

