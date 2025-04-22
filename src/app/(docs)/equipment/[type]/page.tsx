// "use client";

// import React from "react";
// import { usePathname } from "next/navigation";
// import { equipmentItem } from "@/config/nav";
// import { notFound } from "next/navigation";
// import { equipmentLabel } from "@/config/nav";

// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";
// import { EquipmentCard } from "@/components/equipment/card";

// interface EquipmentPageProps {
//   params: Promise<{ type: string }>;
// }

// const mapItems = [
//   {
//     title: "Ruined Temple",
//     status: "Accessible after completing Main Quest Chapter 3",
//     obtain: "Defeat Temple Guardian or explore hidden chest behind the altar",
//   },
//   {
//     title: "Desert Outpost",
//     status: "Available during side quest: 'Sands of Time'",
//     obtain: "Reward from NPC 'Mira' after quest completion",
//   },
//   {
//     title: "Frozen Cavern",
//     status: "Unlocked at level 45",
//     obtain: "Looted from Ice Dragon or found in a breakable ice crystal",
//   },
//   {
//     title: "Moonlight Forest",
//     status: "Open during night cycles only",
//     obtain: "Dropped by Lunar Wolf or inside glowing tree roots",
//   },
//   {
//     title: "Abandoned Mine",
//     status: "Reachable via hidden tunnel in the mountain base",
//     obtain: "Random ore drops and rare gear chest on 3rd floor",
//   },
//   {
//     title: "Sky Fortress",
//     status: "Accessible via airship after clearing Sky Trial",
//     obtain: "Boss drop from Storm Golem or aerial loot crate",
//   },
//   {
//     title: "Corrupted Swamp",
//     status: "Unlocked by using 'Swamp Key' from Witch's Hut",
//     obtain: "Poison-themed accessories and swamp spirit materials",
//   },
//   {
//     title: "Crystal Spire",
//     status: "Endgame zone — requires level 60 and 'Light's Call' quest",
//     obtain:
//       "Crystal Gear Set drops and rare material for crafting legendary weapons",
//   },
// ];

// export default function EquipmentPage({ params }: EquipmentPageProps) {
//   const pathname = usePathname();
//   const pathSplit = pathname.split("/")[2];

//   const { type } = React.use(params);
//   const equipmentList = equipmentItem[type];

//   if (!equipmentList) {
//     return notFound();
//   }

//   return (
//     <>
//       <div className="space-y-4">
//         <Breadcrumb>
//           <BreadcrumbList>
//             <BreadcrumbItem>
//               <BreadcrumbLink href="/equipment/one-handed-sword">
//                 Equipment
//               </BreadcrumbLink>
//             </BreadcrumbItem>
//             <BreadcrumbSeparator />
//             <BreadcrumbItem>
//               <BreadcrumbPage>{equipmentLabel[pathSplit]}</BreadcrumbPage>
//             </BreadcrumbItem>
//           </BreadcrumbList>
//         </Breadcrumb>

//         {/* {equipmentList.map((item, index) => (
//           <div key={index} className="p-4 bg-background rounded-md border">
//             {item}
//           </div>
//         ))} */}
//         <div className="grid gap-4 lg:grid lg:grid-cols-2">
//           {mapItems.map((item, index) => {
//             return (
//               <EquipmentCard
//                 key={index}
//                 title={item.title}
//                 status={item.status}
//                 obtain={item.obtain}
//               />
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// }

"use client";

import React from "react";
import { notFound } from "next/navigation";

import { equipmentItemTest, equipmentLabelTest } from "@/config/nav";
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
  params: Promise<{ type: string }>;
}

export default function EquipmentPage({ params }: EquipmentPageProps) {
  const { type } = React.use(params);
  const equipmentList = equipmentItemTest[type];

  if (!equipmentList) {
    return notFound();
  }

  return (
    <div className="space-y-4">
      {/* Breadcrumb */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/equipment/one-handed-sword">
              Equipment
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{equipmentLabelTest[type]}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Equipment Cards */}
      <div className="grid gap-4 lg:grid-cols-2">
        {equipmentList.map((item, index) => (
          <EquipmentCard
            key={index}
            title={item.title}
            status={item.status}
            obtain={item.obtain}
          />
        ))}
      </div>
    </div>
  );
}
