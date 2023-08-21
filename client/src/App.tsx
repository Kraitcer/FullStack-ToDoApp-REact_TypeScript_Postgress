import { useState } from "react";
import ListHeader from "./components/listHeader";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="app">
      <ListHeader listName={"holyday tick list"} />
    </div>
  );
}

export default App;
