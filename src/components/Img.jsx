import { useState } from "react";
import GridLoader from "react-spinners/GridLoader";

const Img = ({ src, alt = "image", className = "", onClick = () => {} }) => {
  const [isLoading, setIsLoading] = useState(true);

  const imgClassName = className + " " + (isLoading ? "loading" : "");

  return (
    <>
      {isLoading ? (
        <GridLoader
          color="#79d9cc"
          style={{
            margin: "0 auto",
            display: "flex",
            padding: "30px",
            justifyContent: "center",
            alignItems: "center",
          }}
          size={50}
        />
      ) : null}
      <img
        className={imgClassName}
        src={src}
        alt={alt}
        onLoad={() => setIsLoading(false)}
        onClick={onClick}
      />
    </>
  );
};

export default Img;
