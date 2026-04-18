import { useState } from "react";

import "./App.css";
import Title from "./components/Title";

function App() {
  const [isOpened, setOpened] = useState(false);

  const handleTitleOpen = () => {
    setOpened((prevValue) => !prevValue);
  };

  return (
    <>
      <button onClick={handleTitleOpen}>Open/hide title</button>
      {isOpened && <Title name="Products" type="bold" />}
      {isOpened && <Title name="Employees" type="normal" />}
    </>
  );
}

export default App;