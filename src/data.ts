import { NavItemsProps } from "./types";

export const baseItems: Record<string, string[]> = {
  "one-handed-sword": ["Item 1"],
  "two-handed-sword": ["Item 2"],
  bow: ["Item 3"],
  bowgun: ["Item 4"],
  knuckle: ["Item 5"],
  "magic-devices": ["Item 6"],
  staff: ["Item 7"],
  halberd: ["Item 8"],
  katana: ["Item 9"],
};

export const NavItems: NavItemsProps[] = [
  { title: "Guide", href: "/docs/guide" },
  { title: "Map", href: "/docs/map" },
  { title: "Item", href: "/docs/item" },
  { title: "Equipment", href: "/docs/equipment" },
];
