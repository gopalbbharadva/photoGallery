import React from "react";
import {motion} from 'framer-motion';

const ImageModal = ({ selectedImage, selectedNewImage }) => {
  const modalHandler = (e) => {
    if (e.target.classList.contains("main-modal")) 
    selectedNewImage(null);
  };
  return (
    <motion.div className="main-modal" onClick={modalHandler}
      initial={{opacity:0}}
      animate={{opacity:1}}
    >
      <motion.img src={selectedImage} alt="update div" 
      initial={{y:"-10vh"}}
      animate={{y:"0"}}
       />
    </motion.div>
  );
};

export default ImageModal;
