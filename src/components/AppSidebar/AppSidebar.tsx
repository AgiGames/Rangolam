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
} from "../ui/sidebar"

import { Separator } from "@/components/ui/separator"

import { 
  Paintbrush2Icon, 
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

function AppSidebar({ onClickRangoli, onClickKolam }: AppSidebarProps) {
    return (
        <div>
        <SidebarProvider>
            <Sidebar>
            <SidebarHeader className="flex flex-col">
                <div className="flex flex-row items-center justify-start text-3xl">
                <Paintbrush2Icon className="mr-2 text-5xl"/>
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
                        <Tabs defaultValue="rangoli" orientation="vertical">
                            <TabsList className="w-full">
                                <TabsTrigger value="rangoli" onClick={onClickRangoli}>Rangoli</TabsTrigger>
                                <TabsTrigger value="kolam" onClick={onClickKolam}>Kolam</TabsTrigger>
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
        </SidebarProvider>
        </div>
  );
}

export default AppSidebar;