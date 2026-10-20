import type { SettingsDrawerProps } from "./types";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import NumberInput from "../NumberInput/NumberInput";

import { Button } from "../ui/button";
import { SettingsIcon } from "lucide-react";

function SettingsDrawer({ settingsFor, gridScaleValue, gridScaleSetValue, petalOrderValue, petalOrderSetValue, layerOrderValue, layerOrderSetValue }: SettingsDrawerProps) {
    
    return (
        <Drawer swipeDirection="right">
            <DrawerTrigger render={<Button variant="ghost" className="text-muted-foreground"/>}><SettingsIcon /> அமைப்புகள்</DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>அமைப்புகள்</DrawerTitle>
                    <DrawerDescription>வடிவத்தின் அமைப்புகளை மாற்ற</DrawerDescription>
                </DrawerHeader>
                <div className="flex flex-col gap-2 p-4">
                    {
                        settingsFor == "kolam"?
                        <>
                            <NumberInput
                                min={0}
                                max={50}
                                step={1}
                                value={gridScaleValue}
                                setValue={gridScaleSetValue}
                            >
                                புல்லிகலளின் வரிசை
                            </NumberInput>
                        </>
                        :
                        <>
                            <NumberInput
                                min={0}
                                max={50}
                                step={1}
                                value={petalOrderValue}
                                setValue={petalOrderSetValue}
                            >
                                இதழின் வரிசை
                            </NumberInput>
                            <NumberInput
                                min={0}
                                max={50}
                                step={1}
                                value={layerOrderValue}
                                setValue={layerOrderSetValue}
                            >
                                அடுக்குகளின் வரிசை
                            </NumberInput>
                        </>
                    }
                </div>
                <DrawerFooter>
                    <DrawerClose render={<Button variant="outline" />}>குறிப்பெடுத்து மூடு</DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}

export default SettingsDrawer;