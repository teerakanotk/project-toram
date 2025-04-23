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
import { MobileNavItem } from "@/config/nav";
import { ScrollArea } from "@radix-ui/react-scroll-area";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Menu className="cursor-pointer md:hidden" />
      </SheetTrigger>
      <ScrollArea>
        <SheetContent side="left" className="flex gap-0">
          <SheetHeader className="flex items-center justify-end mt-4">
            <SheetTitle className="text-2xl font-semibold" asChild>
              <Link href="/" onClick={() => setOpen(false)}>
                Logo
              </Link>
            </SheetTitle>
          </SheetHeader>
          <SheetDescription />

          <div className="container">
            <div className="grid gap-0.5">
              {MobileNavItem.map((item, index) => {
                const isActive = () =>
                  pathname.startsWith(`/${item.title.toLowerCase()}`);

                return (
                  <Button
                    asChild
                    key={index}
                    variant={isActive() ? "secondary" : "ghost"}
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
      </ScrollArea>
    </Sheet>
  );
}
