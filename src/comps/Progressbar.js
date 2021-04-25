import React from "react";
import ImageStorage from "../Hooks/ImageStorage";
import { useEffect } from "react";
import {motion} from 'framer-motion';

const Progressbar = ({ file, setFile }) => {
  const { url, progress } = ImageStorage(file);
  useEffect(()=>{
    if(url)
        setFile(null);
  },[url,setFile])

  return (
      <motion.div
        className="progress-bar"
        initial={{width:0}}
        animate={{width:progress+"%"}}
      >
      </motion.div>
  );
};

export default Progressbar;
