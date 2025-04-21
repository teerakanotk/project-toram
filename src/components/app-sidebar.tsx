"use client";

import React from "react";
import { NavItemsProps } from "@/types";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

type AppSidebarProps = {
  pathname: string;
};

const navItemsMap: { [key: string]: NavItemsProps[] } = {
  "/guide": [
    { title: "Team", href: "/guide/team" },
    { title: "Contact", href: "/guide/contact" },
  ],
  "/map": [
    { title: "Sign Up", href: "/map/signup" },
    { title: "Login", href: "/map/login" },
  ],
  "/equipment": [
    { title: "One-Handed Sword", href: "/equipment/ohs" },
    { title: "Two-Handed Sword", href: "/equipment/ths" },
  ],
};

export function AppSidebar({ pathname }: AppSidebarProps) {
  if (!pathname) return null;

  const currentNavItems =
    Object.entries(navItemsMap).find(([path]) =>
      pathname.startsWith(path)
    )?.[1] ?? [];

  return (
    <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 border-r md:sticky md:block bg-background">
      <div className="h-full overflow-auto py-6 pr-4 lg:py-8">
        <div className="grid gap-0.5">
          {currentNavItems.map((item, index) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  buttonVariants({ variant: isActive ? "none" : "ghost" }),
                  "flex items-center justify-start",
                  isActive && "bg-accent"
                )}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
