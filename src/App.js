import React from 'react';
import ImageGrid from './comps/ImageGrid';
import Title from './comps/Title';
import Uploadimage from './comps/Uploadimage';

function App() {
  return (
    <div className="App">
      <Title/>
      <Uploadimage/>
      <ImageGrid/>
    </div>
  );
}

export default App;
