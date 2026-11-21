import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { FaArrowRight } from "react-icons/fa";
import { useIsMobile } from "@/hooks/use-mobile";

export function Home() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  return (
    <div className="inset-0 h-[100vh] w-[100vw] bg-teal-50 bg-[url('/rangolam-pattern.svg')] bg-repeat bg-size-[100px_100px] animate-[move_20s_linear_infinite]">
        <div className="z-10 h-full w-full backdrop-blur-[5px] backdrop-brightness-70 p-25 flex items-center justify-center">
            <Card className="outline-1 shadow-2xl pt-0 pb-0">
                <CardHeader className="pt-5">
                    <CardTitle style={{ fontSize: isMobile? "1rem" : "2.25rem" }} className="flex flex-wrap gap-3 items-center">
                        <img src="/rangolam.svg" style={{ width: isMobile? "2rem" : "4rem" }}/>
                        <b>வணக்கம்!</b>
                    </CardTitle>
                </CardHeader>                
                <CardContent>
                    <i style={{ fontSize: isMobile? "1rem" : "2.25rem" }} className="text-muted-foreground text-wrap">
                        தமிழ் கலாச்சாரத்தை வளர்த்துங்க!
                    </i>
                </CardContent>
                <CardFooter className="flex flex-row py-5 items-center bg-teal-50 border-t-2">
                    <Button variant="default" className="flex flex-row items-center gap-1" style={{ fontSize: isMobile? "0.75rem" : "1rem" }} onClick={() => {navigate('/canvas')}}>
                        <FaArrowRight />
                        தொடங்குங்கள்
                    </Button>
                </CardFooter>
            </Card>
        </div>
    </div>
  );
}

export default Home