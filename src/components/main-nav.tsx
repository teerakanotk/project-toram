"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNavItem } from "@/config/nav";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center gap-2">
        <span className="hidden md:inline-block font-bold">Logo</span>
      </Link>
      <nav className="flex items-center gap-4 text-md xl:gap-6">
        {mainNavItem.map((item, index) => {
          const isActive = () =>
            pathname.startsWith(`/${item.title.toLowerCase()}`);

          return (
            // <Link
            //   key={index}
            //   href={item.href}
            //   className={cn(
            //     "transition-colors hover:text-foreground/90",
            //     isActive() ? "text-primary" : "text-foreground/65"
            //   )}
            // >
            //   {item.title}
            // </Link>
            <Button
              asChild
              key={index}
              variant="none"
              className={cn(
                "text-primary/60 hover:text-primary",
                isActive() ? "text-primary" : ""
              )}
            >
              <Link href={item.href}>{item.title}</Link>
            </Button>
          );
        })}
      </nav>
    </div>
  );
}
