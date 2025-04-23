import * as React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { equipmentItem } from "@/config/nav";
import { EquipmentCard } from "@/components/equipment/card";
import { EquipmentBreadcrumb } from "@/components/equipment/breadcrumb";

interface EquipmentPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: EquipmentPageProps): Promise<Metadata> {
  // Unwrapping the Promise to access slug
  const { slug } = await params;
  const equipment = equipmentItem[slug];

  return {
    title: equipment.title,
  };
}

export default async function EquipmentPage({ params }: EquipmentPageProps) {
  const { slug } = await params;
  const equipment = equipmentItem[slug];

  if (!equipment) {
    return notFound();
  }

  return (
    <>
      <section className="space-y-4">
        <EquipmentBreadcrumb title="Equipment" page={equipment?.title} />

        <div className="grid gap-4 lg:grid-cols-2">
          {equipment?.item.map((item, index) => (
            <EquipmentCard
              key={index}
              name={item.name}
              status={item.status}
              obtain={item.obtain}
            />
          ))}
        </div>
      </section>
    </>
  );
}
