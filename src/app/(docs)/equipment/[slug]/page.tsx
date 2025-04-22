// import { notFound } from "next/navigation";
// import { EquipmentItem, EquipmentNavTitle } from "@/config/nav";
// import { EquipmentCard } from "@/components/equipment/card";
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";

// type Props = {
//   params: { slug: string };
// };

// export default async function EquipmentPage({ params }: Props) {
//   const { slug } = await params;
//   const equipmentItems = EquipmentItem[slug];
//   const breadcrumb = EquipmentNavTitle[slug];

//   if (!equipmentItems) {
//     return notFound();
//   }

//   return (
//     <section className="space-y-4">
//       <Breadcrumb>
//         <BreadcrumbList>
//           <BreadcrumbItem>
//             <BreadcrumbLink href="/equipment">Equipment</BreadcrumbLink>
//           </BreadcrumbItem>
//           <BreadcrumbSeparator />
//           <BreadcrumbItem>
//             <BreadcrumbPage>{breadcrumb}</BreadcrumbPage>
//           </BreadcrumbItem>
//         </BreadcrumbList>
//       </Breadcrumb>

//       <div className="grid gap-4 lg:grid-cols-2">
//         {equipmentItems.map((item, index) => (
//           <EquipmentCard
//             key={index}
//             title={item.title}
//             status={item.status}
//             obtain={item.obtain}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

import type { Metadata } from "next";
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

type EquipmentPageProps = {
  params: { slug: string };
};

// 🔥 Dynamic Metadata Generator
export async function generateMetadata({
  params,
}: EquipmentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const title = EquipmentNavTitle[slug];

  if (!title) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: `${title}`,
    description: `Browse items in the ${title} category`,
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
