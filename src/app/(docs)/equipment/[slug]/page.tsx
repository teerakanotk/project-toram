import * as React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { EquipmentItem, EquipmentNavTitle } from "@/config/nav";
import { EquipmentCard } from "@/components/equipment/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface EquipmentPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: EquipmentPageProps): Promise<Metadata> {
  // Unwrapping the Promise to access slug
  const { slug } = await params;
  const breadcrumb = EquipmentNavTitle[slug];

  return {
    title: breadcrumb,
  };
}

export default async function EquipmentPage({ params }: EquipmentPageProps) {
  const { slug } = await params;
  const equipmentItems = EquipmentItem[slug];
  const breadcrumb = EquipmentNavTitle[slug];

  if (!equipmentItems) {
    return notFound();
  }

  return (
    <section className="space-y-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/equipment">Equipment</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{breadcrumb}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid gap-4 lg:grid-cols-2">
        {equipmentItems.map((item, index) => (
          <EquipmentCard
            key={index}
            title={item.title}
            status={item.status}
            obtain={item.obtain}
          />
        ))}
      </div>
    </section>
  );
}
