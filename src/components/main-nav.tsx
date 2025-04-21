"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { NavItems } from "@/data";

export function MainNav() {
  const pathname = usePathname();

  return (
    <>
      <Link href="/" className="mr-6 font-semibold">
        Logo
      </Link>

      <nav className="flex items-center gap-4 xl:gap-6">
        {NavItems.map((item) => {
          const isActive = pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors font-medium",
                isActive
                  ? "text-primary"
                  : "text-accent-foreground/65 hover:text-primary"
              )}
            >
              {item.title}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
