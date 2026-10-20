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
            <DrawerTrigger render={<Button variant="ghost" className="text-muted-foreground"/>}><SettingsIcon /> Settings</DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Settings</DrawerTitle>
                    <DrawerDescription>Change Pattern Settings.</DrawerDescription>
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
                                Grid Scale
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
                                Petal Order
                            </NumberInput>
                            <NumberInput
                                min={0}
                                max={50}
                                step={1}
                                value={layerOrderValue}
                                setValue={layerOrderSetValue}
                            >
                                Layer Order
                            </NumberInput>
                        </>
                    }
                </div>
                <DrawerFooter>
                    <DrawerClose render={<Button variant="outline" />}>Save & Close</DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}

export default SettingsDrawer;