import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

import {
  ButtonGroup,
} from "@/components/ui/button-group"

import { Plus, Download, Trash } from "lucide-react";

import { AspectRatio } from "../ui/aspect-ratio";
import { Button } from "../ui/button";
import { ImageIcon } from "lucide-react";
import type { PatternViewerProps } from "./types";
import SettingsDrawer from "../SettingsDrawer/SettingsDrawer";

import { useEffect, useState } from "react";
import { Spinner } from "../ui/spinner";

function PatternViewer({ patternName }: PatternViewerProps) {
    const [gridScale, setGridScale] = useState(5);
    const [petalOrder, setPetalOrder] = useState(5);
    const [layerOrder, setLayerOrder] = useState(5);

    const [generating, setGenerating] = useState(false);

    const [patternSrc, setPatternSrc] = useState("");

    useEffect(() => {
        if (patternSrc.startsWith("blob:")) {
            return () => URL.revokeObjectURL(patternSrc);
        }
    }, [patternSrc]);

    useEffect(() => {
        setPatternSrc("");
    }, [patternName])

    function downloadPattern() {
        const link = document.createElement("a");
        link.href = patternSrc;
        link.download = `${patternName}.png`;
        link.click();
    }

    async function generatePattern() {
        setGenerating(true);
        
        try {
            if (patternName == "kolam") {
                const response = await fetch(
                    'https://agigames-rangolam-fast-api.hf.space/kolam',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(
                            {
                                grid: gridScale,
                            }
                        )
                    }
                )

                if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`);
                }

                const imageBlob = await response.blob();
                setPatternSrc(URL.createObjectURL(imageBlob));
            }
            else {
                const response = await fetch(
                    'https://agigames-rangolam-fast-api.hf.space/rangoli',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(
                            {
                                layerOrder: layerOrder,
                                petalOrder: petalOrder,
                            }
                        )
                    }
                )

                if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`);
                }

                const imageBlob = await response.blob();
                setPatternSrc(URL.createObjectURL(imageBlob));
            }
        } finally {
            setGenerating(false);
        }
    }

    return (
      <Empty>
        <EmptyHeader>
            {
                patternSrc == ""?
                <>
                    <EmptyMedia variant="icon">
                    <ImageIcon />
                    </EmptyMedia>
                    <EmptyTitle>{`No Generated ${patternName.charAt(0).toUpperCase() + patternName.slice(1)} Yet`}</EmptyTitle>
                    <EmptyDescription>
                    {`You haven't generated any ${patternName} yet.`}
                    </EmptyDescription>
                </>
                :
                <AspectRatio ratio={1} className="w-full max-w-sm rounded-lg bg-muted">
                    <img
                        src={patternSrc}
                        alt="Photo"
                        className="h-full w-full rounded-lg object-contain"
                    />
                </AspectRatio>
            }

        </EmptyHeader>
        <EmptyContent className="flex-row justify-center gap-2">
            {
                patternSrc == ""?
                    <Button onClick={async () => {await generatePattern()}}>
                        {
                            generating? <><Spinner data-icon="inline-start"/> Generating</>
                            : <><Plus />{`Create ${patternName.charAt(0).toUpperCase() + patternName.slice(1)}`}</>
                        }
                    </Button>
                :
                <ButtonGroup>
                    <Button onClick={async () => {await generatePattern()}}>
                        {
                            generating? <><Spinner data-icon="inline-start"/> Generating</>
                            : <><Plus />{`Create ${patternName.charAt(0).toUpperCase() + patternName.slice(1)}`}</>
                        }
                    </Button>
                    <Button onClick={() => {downloadPattern()}}>
                        <Download /> Download
                    </Button>
                    <Button 
                        variant="destructive"
                        onClick={() => {setPatternSrc("")}}
                    >
                        <Trash /> Clear
                    </Button>
                </ButtonGroup>
            }
        </EmptyContent>
        <SettingsDrawer
            gridScaleValue={gridScale}
            gridScaleSetValue={setGridScale} 
            petalOrderValue={petalOrder}
            petalOrderSetValue={setPetalOrder}  
            layerOrderValue={layerOrder}
            layerOrderSetValue={setLayerOrder}
            settingsFor={patternName}
        />
      </Empty>
    );
}

export default PatternViewer;