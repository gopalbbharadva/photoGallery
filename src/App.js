import React, { useState } from "react";
import ImageModal from "./comps/ImageModal";
import ImageGrid from "./comps/ImageGrid";
import Title from "./comps/Title";
import Uploadimage from "./comps/Uploadimage";
import './index.css';

function App() {
  const [selectedImage, selectedNewImage] = useState(null);
  return (
    <div className="App">
      <Title />
      <Uploadimage />
      <ImageGrid selectedNewImage={selectedNewImage} />
      {selectedImage && (
        <ImageModal
          selectedImage={selectedImage}
          selectedNewImage={selectedNewImage}
        />
      )}
    </div>
  );
}

export default App;
