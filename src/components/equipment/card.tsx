"use client";

import { Separator } from "@/components/ui/separator";

interface EquipmentCardProps {
  title: string;
  status: string;
  obtain: string;
}

export function EquipmentCard({ title, status, obtain }: EquipmentCardProps) {
  return (
    <>
      <div className="flex flex-col justify-start p-4 border rounded-md bg-background">
        <span className="flex">{title}</span>
        <Separator className="mt-2 mb-3" />
        <section className="grid xl:grid-cols-[200px_minmax(0,1fr)] gap-4">
          {/* Image */}
          <div className="flex justify-center">
            <div className="flex justify-center h-[200px] w-[200px] bg-accent">
              Image
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between gap-2">
            <div className="h-full w-full bg-green-300">
              <span>Status</span>
              <Separator className="mb-2" />
              <span>{status}</span>
            </div>

            <div className="h-full w-full bg-accent">
              <span>Obtain</span>
              <Separator className="mb-2" />
              <span>{obtain}</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
