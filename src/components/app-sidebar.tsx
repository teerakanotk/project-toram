"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import { NavItemProps } from "@/types";
import { SidebarNavItem } from "@/config/nav";

const category: { [key: string]: NavItemProps[] } = {
  guide: SidebarNavItem.guide,
  map: SidebarNavItem.map,
  item: SidebarNavItem.item,
  equipment: SidebarNavItem.equipment,
};

export function AppSidebar() {
  const pathname = usePathname();

  // Find the items based on the category passed as a prop
  const categoryItem = category[pathname.split("/")[1]] || [];

  return (
    <aside className="hidden fixed top-14 z-30 h-[calc(100vh-3.5rem)] w-full shrink-0 border-r md:sticky md:block bg-background">
      <div className="h-full overflow-auto py-6 pr-4 lg:py-8">
        <div className="grid gap-0.5">
          {categoryItem.map((item, index) => {
            return (
              <Button
                asChild
                key={index}
                variant={pathname === item.href ? "secondary" : "ghost"}
              >
                <Link
                  href={item.href}
                  className="flex items-center justify-start"
                >
                  {item.title}
                </Link>
              </Button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
