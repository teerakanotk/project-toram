"use client";

import { usePathname } from "next/navigation";

// interface GuidePageProps {}

export default function GuidePage() {
  const pathname = usePathname();
  const path = pathname.split("/")[2];

  return <div>{path}</div>;
}
