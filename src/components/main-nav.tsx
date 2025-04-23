"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MainNavItem } from "@/config/nav";
import { cn } from "@/lib/utils";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex imtes-center gap-2">
        <span className="hidden md:inline-block font-bold">Logo</span>
      </Link>
      <nav className="flex items-center gap-4 text-md xl:gap-6">
        {MainNavItem.map((item, index) => {
          const isActive = () =>
            pathname.startsWith(`/${item.title.toLowerCase()}`);

          return (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "transition-colors hover:text-foreground/90",
                isActive() ? "text-primary" : "text-foreground/65"
              )}
            >
              {item.title}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
