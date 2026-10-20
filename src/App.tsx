import AppSidebar from "./components/AppSidebar/AppSidebar"
import PatternViewer from "./components/PatternViewer/PatternViewer";

import { useState } from "react";

export function App() {
  const [mode, setMode] = useState("rangoli")

  return (
    <div className="flex felx-row">
      <AppSidebar onClickKolam={() => {setMode("kolam")}} onClickRangoli={() => {setMode("rangoli")}}/>
      <PatternViewer patternName={mode} />
    </div>
  );
}

export default App
