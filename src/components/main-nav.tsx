"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex imtes-center gap-2">
        <span className="hidden md:inline-block font-bold">Logo</span>
      </Link>
      <nav className="flex items-center gap-4 text-md xl:gap-6">
        <Link
          href="/guide"
          className={cn(
            "transition-colors hover:text-foreground/90",
            pathname === "/guide" ? "text-foreground" : "text-foreground/75"
          )}
        >
          Guide
        </Link>
        <Link
          href="/map"
          className={cn(
            "transition-colors hover:text-foreground/90",
            pathname === "/map" ? "text-foreground" : "text-foreground/75"
          )}
        >
          Map
        </Link>
        <Link
          href="/item"
          className={cn(
            "transition-colors hover:text-foreground/90",
            pathname === "/item" ? "text-foreground" : "text-foreground/75"
          )}
        >
          Item
        </Link>
        <Link
          href="/equipment/one-handed-sword"
          className={cn(
            "transition-colors hover:text-foreground/90",
            pathname?.startsWith("/equipment")
              ? "text-foreground"
              : "text-foreground/75"
          )}
        >
          Equipment
        </Link>
      </nav>
    </div>
  );
}
