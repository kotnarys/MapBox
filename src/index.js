import React, { useState } from "react";
import { render } from "react-dom";
import useMapBox from "./useMapBox";
import "./index.css";

function App() {
  const [random, setRandom] = useState(Math.random());

  useMapBox({ id: "map", center: [3.0, 2.0], zoom: 5, random: random });
  return (
    <>
      <button className="btn" id="rerender" onClick={React.memo(() => setRandom(Math.random()))}>
        Ререндер!
      </button>
      <div  id="map"></div>
    </>
  );
}

render(<App />, document.querySelector("#root"));
