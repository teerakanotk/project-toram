"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
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
import { NavItem } from "@/config/nav";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  const pathname = usePathname();

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
              onClick={() => setOpen(false)}
            >
              Logo
            </Link>
          </SheetTitle>
        </SheetHeader>
        <SheetDescription />

        <div className="container">
          <div className="grid gap-0.5">
            {NavItem.map((item, index) => {
              const isActive = () =>
                pathname.startsWith(`/${item.title.toLowerCase()}`);

              return (
                <Button
                  key={index}
                  asChild
                  variant={isActive() ? "active" : "ghost"}
                  className="flex items-center justify-start"
                  onClick={() => setOpen(false)}
                >
                  <Link href={item.href}>{item.title}</Link>
                </Button>
              );
            })}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
