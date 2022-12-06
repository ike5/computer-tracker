import { useState } from "react";
import Grid from "./Grid";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Grid />
    </div>
  );
}

export default App;
