import { useState } from "react";
import "./App.css";
import CustomButton from "./components/CustomButton";

function App() {
  const [color, setColor] = useState("teal");

  return (
    <div id="main" style={{ backgroundColor: color }}>
      <div id="div1" style={{ backgroundColor: color }}>
        <div id="div2">
          <CustomButton colorValue="RED" setColorFunction={setColor} />
          <CustomButton colorValue="GREEN" setColorFunction={setColor} />
          <CustomButton colorValue="BLUE" setColorFunction={setColor} />
          <CustomButton colorValue="YELLOW" setColorFunction={setColor} />
          <CustomButton colorValue="PINK" setColorFunction={setColor} />
          <CustomButton colorValue="GREY" setColorFunction={setColor} />
        </div>
      </div>
    </div>
  );
}

export default App;
