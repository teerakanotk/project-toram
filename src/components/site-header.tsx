"use client";

import React from "react";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { ModeToggle } from "./mode-toggle";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-14 items-center gap-2 md:gap-4">
        <div className="mr-4 hidden md:flex">
          <MainNav />
        </div>

        <MobileNav />

        <div className="flex items-center ml-auto md:flex md:justify-end">
          <ModeToggle />

          <Link
            href="https://github.com/teerakanotk"
            target="_blank"
            className={buttonVariants({ variant: "ghost" })}
          >
            <FaGithub />
          </Link>
        </div>
      </div>
    </header>
  );
}
