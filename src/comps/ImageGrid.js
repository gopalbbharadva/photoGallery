import React from "react";
import ImageFirestore from "../Hooks/ImageFirestore";
import { motion } from "framer-motion";

const ImageGrid = ({ selectedNewImage }) => {
  const { docs } = ImageFirestore("Images");
  return (
    <div className="img-grid">
      {docs &&
        docs.map((item) => (
          <motion.div
            layout
            whileHover={{ opacity: 1 }}
            className="img-wrap"
            onClick={() => selectedNewImage(item.url)}
            key={item.id}
          >
            <motion.img src={item.url} alt="sorry! not available" 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:2}}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
