import {
  Sidebar,
  SidebarContent, 
  SidebarFooter, 
  SidebarGroup, 
  SidebarHeader, 
  SidebarProvider,
  SidebarTrigger,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarRail,
} from "../ui/sidebar"

import { Separator } from "@/components/ui/separator"

import { 
    Grid3X3,
    Flower
} from "lucide-react"

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import { Tabs, TabsList, TabsTrigger } from "../ui/tabs"

import { FaGithub } from "react-icons/fa";
import type { AppSidebarProps } from "./types";
import { useState } from "react"

function AppSidebar({ onClickRangoli, onClickKolam }: AppSidebarProps) {
    const [selectedMode, setSelectedMode] = useState("Rangoli");

    return (
        <div>
        <SidebarProvider>
            <Sidebar variant="inset">
            <SidebarHeader className="flex flex-col">
                <div className="flex flex-row items-center justify-start text-3xl">
                <img src="/rangolam.svg" className="w-8 h-8 mr-2"/>
                Rangolam
                </div>
                <Separator />
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                <SidebarGroupLabel>
                    Choose Pattern
                </SidebarGroupLabel>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <Tabs defaultValue={selectedMode} orientation="vertical">
                            <TabsList className="w-full">
                                <TabsTrigger value="rangoli" onClick={(e) => {setSelectedMode("rangoli"); onClickRangoli(e)}}><Flower /> Rangoli</TabsTrigger>
                                <TabsTrigger value="kolam" onClick={(e) => {setSelectedMode("kolam"); onClickKolam(e)}}><Grid3X3 /> Kolam</TabsTrigger>
                            </TabsList>
                        </Tabs>
                    </SidebarMenuItem>
                </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <div className="flex flex-col gap-2">
                    <Separator orientation="horizontal"/>
                    <a
                        href="https://github.com/AgiGames"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-row items-center justify-evenly text-muted-foreground text-xs"
                    >
                        Made by Agilesh Arumugam
                        <Avatar>
                            <AvatarImage
                            src="https://github.com/AgiGames.png"
                            alt="@agigames"
                            />
                            <AvatarFallback>AG</AvatarFallback>
                        <AvatarBadge>
                            <FaGithub />
                        </AvatarBadge>
                        </Avatar>
                    </a>
                </div>
            </SidebarFooter>
            </Sidebar>
            <SidebarTrigger />
            <SidebarRail />
        </SidebarProvider>
        </div>
  );
}

export default AppSidebar;