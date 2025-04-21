import { EquipmentToggleGroup } from "@/components/equipment/toggle-group";

export default function EquipmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <EquipmentToggleGroup />
      {children}
    </div>
  );
}
