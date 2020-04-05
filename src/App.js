import React from 'react';
import imageInSrc from "./katablade.jpg";
import './App.css';

function App() {
  return (
    <div className="app">
    <div className="app" style={{border:"solid 1px black", maxWidth: "100vw"}}>
	  <h1 className="title red">Hazem</h1>
    <br />
    <img src={imageInSrc} alt="img" />
    <br />
	  <img src="/katablade.jpg" alt="img" />
    </div>
    <video width="320" height="240" controls >
    <source src="impossible.mp4" type="video/mp4" />
    </video>
    </div>
  );
}

export default App;
