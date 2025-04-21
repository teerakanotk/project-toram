"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { baseItems } from "@/data";

const labelMap: Record<string, string> = {
  all: "All",
  "one-handed-sword": "One-Handed Sword",
  "two-handed-sword": "Two-Handed Sword",
  bow: "Bow",
  bowgun: "Bowgun",
  knuckle: "Knuckle",
  "magic-devices": "Magic Devices",
  staff: "Staff",
  halberd: "Halberd",
  katana: "Katana",
};

export function EquipmentToggleGroup() {
  const pathname = usePathname();

  const current = decodeURIComponent(pathname.split("/").pop() || "all");

  const buttonSlugs = ["all", ...Object.keys(baseItems)];

  return (
    <section className="hidden md:flex flex-wrap gap-1 mb-4">
      {buttonSlugs.map((item, index) => (
        <Link key={index} href={`/docs/equipment/${item}`}>
          <Button
            variant="none"
            className={
              current === item
                ? "text-primary-foreground border bg-primary/95"
                : "border bg-background hover:bg-accent"
            }
          >
            {labelMap[item]}
          </Button>
        </Link>
      ))}
    </section>
  );
}
