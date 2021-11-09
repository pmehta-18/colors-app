import "./index.css";
import { useEffect, useState } from "react";
import { getColorShades, getData } from "./utils/helper";

export default function App() {
  const [word, setWord] = useState("");
  const [data, setData] = useState({});
  const [colors, setColors] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const result = await getData();
      setData(result);
    }
    fetchData();
  }, []);
  const handleClick = () => {
    if (data[word]) {
      // find color shades
      setColors(getColorShades(data[word]));
    }
    else {
      setColors([]);
      window.alert('Word not found!');
    }
  };
  return (
    <div className="App">
      <input value={word} onChange={(e) => setWord(e.target.value)} />
      <button onClick={handleClick} className="action-button">Find colors</button>
      <div className="color-grid">
        {colors.map((color) => {
          return <div className="color--grid-item" key={color.hex} style={{backgroundColor: color.hex}}>
            <div className="color-code" style={{color: data[word]}}>{color.hex}</div>
          </div>
        })}
      </div>
    </div>
  );
}
