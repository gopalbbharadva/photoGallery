import React from "react";
import ImageFirestore from "../Hooks/ImageFirestore";

const ImageGrid = () => {
  const { docs } = ImageFirestore("Images");
  return (
    <div className="image-grid">
      {docs &&
        docs.map((item) => (
          <div className="image-wrap" id={item.id}>
            <img src={item.url} />
          </div>
        ))}
    </div>
  );
};

export default ImageGrid;
