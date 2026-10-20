import AppSidebar from "./components/AppSidebar/AppSidebar"
import PatternViewer from "./components/PatternViewer/PatternViewer";

import { useState } from "react";
import { useIsMobile } from "./hooks/use-mobile";

export function App() {
  const isMobile = useIsMobile();
  const [mode, setMode] = useState("rangoli")

  return (
    <div style={{ paddingRight: isMobile? "2rem" : "0rem" }} className="flex flex-row">
      <AppSidebar onClickKolam={() => {setMode("kolam")}} onClickRangoli={() => {setMode("rangoli")}}/>
      <PatternViewer patternName={mode} />
    </div>
  );
}

export default App
