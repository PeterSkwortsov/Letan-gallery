

function Collect({ image, name, size, format }) {




  return (
    <div className="collection">
      
      


      <img src={image} alt={name} />
      <h4>{name}</h4>
      <h5>{size}</h5>
      <p>{format}</p>

    </div>
  );
}

export default Collect;

