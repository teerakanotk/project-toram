"use client";

import React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NavItems } from "@/data";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  const handledClose = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader className="flex items-center justify-centert">
          <SheetTitle className="text-2xl font-semibold" asChild>
            <Link
              href="/"
              className="text-2xl font-bold"
              onClick={handledClose}
            >
              Logo
            </Link>
          </SheetTitle>
        </SheetHeader>
        <SheetDescription />

        <div className="container">
          <div className="grid gap-0.5">
            {NavItems.map((item, index) => {
              const isActive = pathname.startsWith(item.href);

              return (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    buttonVariants({ variant: isActive ? "none" : "ghost" }),
                    "flex items-center justify-start",
                    isActive && "bg-accent"
                  )}
                  onClick={handledClose}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
