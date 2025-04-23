import { navItemProps } from "@/types";

const navItem: navItemProps[] = [
  {
    title: "Guide",
    href: "/guide/status",
  },
  {
    title: "Map",
    href: "/map",
  },
  {
    title: "Item",
    href: "/item",
  },
  {
    title: "Equipment",
    href: "/equipment/one-handed-sword",
  },
];

export const mainNavItem = navItem;
export const mobileNavItem = navItem;

export const sidebarNavItem: { [key: string]: navItemProps[] } = {
  guide: [{ title: "Guide", href: "/guide/status" }],
  map: [{ title: "Map", href: "/map" }],
  item: [{ title: "Item", href: "/item" }],
  equipment: [
    { title: "One-Handed Sword", href: "/equipment/one-handed-sword" },
    { title: "Two-Handed Sword", href: "/equipment/two-handed-sword" },
    { title: "Bow", href: "/equipment/bow" },
    { title: "Bowgun", href: "/equipment/bowgun" },
    { title: "Knuckle", href: "/equipment/knuckle" },
    { title: "Magic Devices", href: "/equipment/magic-devices" },
    { title: "Staff", href: "/equipment/staff" },
    { title: "Halberd", href: "/equipment/halberd" },
    { title: "Katana", href: "/equipment/katana" },
    { title: "Dagger", href: "/equipment/dagger" },
    { title: "Arrow", href: "/equipment/arrow" },
    { title: "Shield", href: "/equipment/shield" },
    { title: "Ninjutsu Scroll", href: "/equipment/ninjutsu-scroll" },
    { title: "Armor", href: "/equipment/armor" },
    { title: "Additional", href: "/equipment/additional" },
    { title: "Special", href: "/equipment/special" },
  ],
};
