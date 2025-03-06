"use client";

import { EndpointList, SidebarHeader } from "@/components";
import { Divider } from "./Divider";

export function Sidebar() {
  return (
    <div className="w-[275px] h-screen p-6 border-r border-gray-200 bg-white overflow-hidden">
      <SidebarHeader />
      <div className="w-full h-[calc(100%-2.25rem)] flex flex-col gap-6 py-8 px-4">
        <Divider>OVERVIEW</Divider>
        <Divider>ENDPOINTS</Divider>
        <EndpointList />
      </div>
    </div>
  );
}
