"use client";

import React from "react";
import { baseItems } from "@/data";

const allItems = Object.values(baseItems).flat();

const items = {
  all: allItems,
  ...baseItems,
};

type EquipmentPageProps = {
  params: Promise<{ slug: string }>;
};

export default function EquipmentPage({ params }: EquipmentPageProps) {
  const { slug } = React.use(params);
  const itemList = items[slug as keyof typeof items] || [];

  return (
    <div className="space-y-2">
      {itemList.map((item, index) => (
        <div key={index} className="p-4 bg-background rounded-md border">
          {item}
        </div>
      ))}
    </div>
  );
}
