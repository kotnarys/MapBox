import React, { useState, useRef } from "react";
import { render } from "react-dom";
import useMapBox from "./useMapBox";
import "./index.css";

function App() {

  const mapRef = useRef();
  const [random, setRandom] = useState(Math.random());

  useMapBox({ ref: {mapRef}, center: [3.0, 2.0], zoom: 5, random: random });
  return (
    <>
      <button ref={mapRef} className="btn" id="rerender" onClick={React.memo(() => setRandom(Math.random()))}>
        Ререндер!
      </button>
      <div  id="map"></div>
    </>
  );
}

render(<App />, document.querySelector("#root"));
