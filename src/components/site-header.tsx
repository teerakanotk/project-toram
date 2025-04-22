"use client";

import React from "react";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { ModeToggle } from "./mode-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-14 items-center gap-2 md:gap-4">
        <MainNav />
        <MobileNav />
        <div className="flex items-center ml-auto md:flex md:justify-end">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
