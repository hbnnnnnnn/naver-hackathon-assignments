import React from "react";
import "./App.css";
import Game from "./components/Game";
import Menu from "./components/Menu";


function App() {
  const [mode, setMode] = React.useState(null);

  return (
    <div className="container">
      {!mode ? <Menu setMode={setMode} /> : <Game mode={mode} setMode={setMode} />}
    </div>
  );
}

export default App;
