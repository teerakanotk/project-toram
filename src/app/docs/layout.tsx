"use client";

// import { usePathname } from "next/navigation";
// import { AppSidebar } from "@/components/app-sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const pathname = usePathname();

  return (
    <div className="container flex-1 items-start md:grid  md:gap-6">
      {/* <AppSidebar pathname={pathname} /> */}
      <main className="relative py-6 lg:gap-10 lg:py-8">
        <div>{children}</div>
      </main>
    </div>
  );
}
