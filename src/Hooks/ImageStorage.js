import { useState, useEffect } from "react";
import { storageRef, timeStamp } from "../Firebase/firebaseConfig";
import { firestoreRef } from "../Firebase/firebaseConfig";

const ImageStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const imageRef = storageRef.ref(file.name);
    const imageurlRef = firestoreRef.collection("Images");

    imageRef.put(file).on(
      "state_changed",
      (snap) => {
        const percent = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percent);
      },
      (error) => {
        setError(error);
      },
      async () => {
        const url = await imageRef.getDownloadURL();
        const createdAt = timeStamp();
        imageurlRef.add({ url, createdAt });
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, error, url };
};

export default ImageStorage;
