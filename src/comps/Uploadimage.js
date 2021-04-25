import React,{useState} from "react";

export const Uploadimage = () => {

    const [file,setFile]=useState(null);
    const [error, setError]=useState(null);

    const fileChangeHandler=(e)=>{
        const selectedFile=e.target.files[0];
        const fileTypes=['image/png','image/jpeg'];
        if(selectedFile && fileTypes.includes(selectedFile.type))
        {
            setFile(selectedFile);
            setError(null);
        }
        else
        {
            setFile(null);
            setError("You can upload (png or jpeg) files only")
        }
    }
  return (
    <div>
      <input type="file" onChange={fileChangeHandler}/>
      {file && <div>{file.name}</div>}
      {error && <div style={{color:"red"}}>{error}</div>}
    </div>
  );
};
