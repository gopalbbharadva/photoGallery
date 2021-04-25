import { useState, useEffect } from "react";
import { storageRef } from "../Firebase/firebaseConfig";

const imageStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const imageRef = storageRef.ref(file.name);
    imageRef.put(file).on(
      "sate_changed",
      (snap) => {
        const percent = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percent);
      },
      (error) => {
        setError(error);
      },
      async () => {
        const url = await imageRef.getDownloadURL();
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, error, url };
};

export default imageStorage;
