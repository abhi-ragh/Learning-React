import Header from "./components/Header";
import Meme from "./components/Meme";
import MemesData from "./MemesData";
import "./index.css";
import { useState } from 'react';
 
function App() {
  return (
    <div className="App">
      <Header />
      <Meme/>
    </div>
  );
}

export default App;
