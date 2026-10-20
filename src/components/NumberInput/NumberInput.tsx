import { Minus, Plus } from "lucide-react";
import { Button } from "../ui/button";
import type { NumberInputProps } from "./types";

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"

function NumberInput({ min, max, step, children, value, setValue, ...props }: NumberInputProps) {

    function decrement() {
        setValue(Math.max(min, value - step));
    }

    async function increment() {
        setValue(Math.min(max, value + step));
    }

    function directSet(number: number) {
        setValue(Math.min(max, Math.max(min, number)));
    }

    return (
        <Card>
            <CardHeader>
                {children}
            </CardHeader>
            
            <CardContent>
                <div className="flex flex-row gap-0 rounded-full border">
                    <Button
                        className="rounded-l-full rounded-r-none border-r-0"
                        onClick={decrement}
                        disabled = {value <= min}
                    >
                        <Minus />
                    </Button>

                    <input
                        {...props}
                        inputMode="numeric"
                        value={value}
                        onChange={(e) => directSet(Number(e.target.value))}
                        maxLength={3}
                        className="all-[unset] focus:outline-none min-w-0 flex-1 truncate text-center text-sundown-900"
                    />

                    <Button
                        className="rounded-l-none rounded-r-full border-l-0"
                        onClick={increment}
                        disabled = {value >= max}
                    >
                        <Plus />
                    </Button>
                </div>
            </CardContent>
        </Card>
    );

}

export default NumberInput;