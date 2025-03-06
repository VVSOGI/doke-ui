"use client";

import Link from "next/link";
import { EndpointList } from "@/components";
import { NotoSans } from "@/lib/assets";

export function Sidebar() {
  return (
    <div className="w-[275px] h-screen p-6 border-r border-gray-200 bg-white overflow-hidden">
      <Link
        href={"/"}
        className={`
          w-fit flex gap-1 items-center py-4 px-4 text-3
          hover:text-gray-500 child:hover:text-blue-200
          active:text-black
          ${NotoSans.className}
       `}
      >
        doke <span className="text-blue-100">API</span>
      </Link>
      <div className="w-full h-[calc(100%-2.25rem)] flex flex-col gap-6 py-8 px-4">
        <div className={`text-2 font-300 text-gray-600 ${NotoSans.className}`}>ENDPOINTS</div>
        <EndpointList />
      </div>
    </div>
  );
}
