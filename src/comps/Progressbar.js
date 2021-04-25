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
    <div>
      <div
        className="progress-bar"
        style={{
          width: progress + "%",
          height: "1rem",
          backgroundColor: "blue",
        }}
      >{progress+"%"}
      </div>
    </div>
  );
};

export default Progressbar;
