import React, { useEffect, useState } from "react";
import { firestoreRef } from "../Firebase/firebaseConfig";

const ImageFirestore = (collection) => {
  const [docs, setNewDocs] = useState([]);

  useEffect(() => {
    const unsub = firestoreRef
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        const documents = [];
        snap.forEach((doc) => {
          documents.push({...doc.data(),id:doc.id});
        });
        setNewDocs(documents);
      });
    return () => unsub();
  }, [collection]);

  return { docs };
};

export default ImageFirestore;
