"use client"

import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar"
import { SideBarOptions } from "@/services/Constants"
import { Plus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function AppSidebar() {

  const path = usePathname()


  return (
    <Sidebar>
      <SidebarHeader className={'flex items-center justify-center'}>
            <Image src={'/voxy.png'} alt="logo" width={200} height={100} className="w-[200px]"/>
            <Button className={'w-full mt-5'}><Plus/> Create new Interview</Button>
        </SidebarHeader>
      <SidebarContent>
        <SidebarGroup >
            <SidebarMenu>
                {SideBarOptions.map((option, index) => (
                    <SidebarMenuItem key={index} className={'p-1'}>
                        <SidebarMenuButton asChild className={`p-5 ${path==option.path  && 'bg-black/10'}`}>
                            <Link href={option.path}>
                              <option.icon className={`${path==option.path  && 'text-primary'}`}/>
                              <span className={`text-[16px] font-medium ${path==option.path  && 'text-primary'}`}>{option.name}</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
                    
            </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}