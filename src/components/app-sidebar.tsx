"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import { NavItemProps } from "@/types";

const guideNavItem: NavItemProps[] = [
  { title: "Team", href: "/guide/team" },
  { title: "Contact", href: "/guide/contact" },
];

const mapNavItem: NavItemProps[] = [
  { title: "Sign Up", href: "/map/signup" },
  { title: "Login", href: "/map/login" },
];

const itemNavItem: NavItemProps[] = [{ title: "Login", href: "/item/login" }];

const equipmentNavItem: NavItemProps[] = [
  {
    title: "One-Handed Sword",
    href: "/equipment/one-handed-sword",
  },
  {
    title: "Two-Handed Sword",
    href: "/equipment/two-handed-sword",
  },
  {
    title: "Bow",
    href: "/equipment/bow",
  },
  {
    title: "Bowgun",
    href: "/equipment/bowgun",
  },
  {
    title: "Knuckle",
    href: "/equipment/knuckle",
  },
  {
    title: "Magic Devices",
    href: "/equipment/magic-devices",
  },
  {
    title: "Staff",
    href: "/equipment/staff",
  },
  {
    title: "Halberd",
    href: "/equipment/halberd",
  },
  {
    title: "Katana",
    href: "/equipment/katana",
  },
  {
    title: "Dagger",
    href: "/equipment/dagger",
  },
  {
    title: "Arrow",
    href: "/equipment/arrow",
  },
  {
    title: "Shield",
    href: "/equipment/shield",
  },
  {
    title: "Ninjutsu Scroll",
    href: "/equipment/ninjutsu-scroll",
  },
  {
    title: "Armor",
    href: "/equipment/armor",
  },
  {
    title: "Additional",
    href: "/equipment/additional",
  },
  {
    title: "Special",
    href: "/equipment/special",
  },
];

const categoryNavItem: { [category: string]: NavItemProps[] } = {
  guide: guideNavItem,
  map: mapNavItem,
  item: itemNavItem,
  equipment: equipmentNavItem,
};

export function AppSidebar() {
  const pathname = usePathname();

  // Extract category from the pathname, e.g. "/guide/team" -> "guide"
  const category = pathname.split("/")[1];
  // Find the items based on the category passed as a prop
  const sidebarNavItem = categoryNavItem[category] || [];

  return (
    <aside className="hidden fixed top-14 z-30 h-[calc(100vh-3.5rem)] w-full shrink-0 border-r md:sticky md:block bg-background">
      <div className="h-full overflow-auto py-6 pr-4 lg:py-8">
        <div className="grid gap-0.5">
          {sidebarNavItem.map((item, index) => {
            return (
              <Button
                asChild
                key={index}
                variant={pathname === item.href ? "active" : "ghost"}
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
