"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { equipmentItem, EquipmentNavTitle } from "@/config/nav";

export function EquipmentToggleGroup() {
  const pathname = usePathname();
  const equipment = [...Object.keys(equipmentItem)];

  return (
    <>
      <section className="hidden md:flex flex-wrap gap-1 mb-4">
        {equipment.map((item, index) => {
          return (
            <Button
              asChild
              variant={
                pathname === `/equipment/${item}` ? "default" : "outline"
              }
              key={index}
              className="border"
            >
              <Link href={`/equipment/${item}`}>{EquipmentNavTitle[item]}</Link>
            </Button>
          );
        })}
      </section>
    </>
  );
}
