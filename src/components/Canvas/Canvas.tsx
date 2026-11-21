import AppSidebar from "../AppSidebar/AppSidebar";
import PatternViewer from "../PatternViewer/PatternViewer";

import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export function Canvas() {
  const isMobile = useIsMobile();
  const [mode, setMode] = useState("rangoli")

  return (
    <div style={{ paddingRight: isMobile? "2rem" : "0rem" }} className="flex flex-row">
      <AppSidebar onClickKolam={() => {setMode("kolam")}} onClickRangoli={() => {setMode("rangoli")}}/>
      <PatternViewer patternName={mode} />
    </div>
  );
}

export default Canvas