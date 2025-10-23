import { useState } from "react";

function App() {
  const [num, setNum] = useState(0);

  return (
    <>
      <button onClick={() => setNum((prev) => prev - 10)}>-10</button>
      <button onClick={() => setNum((prev) => prev - 1)}>-1</button>
      <div>{num}</div>
      <button onClick={() => setNum((prev) => prev + 1)}>+1</button>
      <button onClick={() => setNum((prev) => prev + 10)}>+10</button>
    </>
  );
}

export default App;
