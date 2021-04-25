import React from "react";
import ImageStorage from "../Hooks/ImageStorage";
import { useEffect } from "react";

const Progressbar = ({ file, setFile }) => {
  const { url, progress } = ImageStorage(file);
  useEffect(()=>{
    if(url)
        setFile(null);
  },[url,setFile])

  return (
      <div
        className="progress-bar"
        style={{
          width: progress +"%",
        }}
      >
      </div>
  );
};

export default Progressbar;
