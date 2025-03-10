import React from "react";
import { NotoSans } from "@/lib/assets";
import { Endpoint } from "@/lib/types";
import { ApiExecuteButton } from "@/components";

interface Props {
  endpoint: Endpoint;
}

export function EndpointTitle({ endpoint }: Props) {
  return (
    <div
      className={`
        flex gap-8 mb-10 text-5 font-300
        ${NotoSans.className}
      `}
    >
      <div
        className={`
          px-4 text-white rounded-md
          ${endpoint.method === "POST" && "bg-green-300"}
          ${endpoint.method === "GET" && "bg-blue-200"}
          ${endpoint.method === "PATCH" && "bg-mint-300"}
          ${endpoint.method === "PUT" && "bg-mint-300"}
          ${endpoint.method === "DELETE" && "bg-red-200"}
        `}
      >
        {endpoint.method}/
      </div>
      <div className="w-full flex justify-between items-center pr-10">
        <div>{endpoint.name}</div>
        <ApiExecuteButton />
      </div>
    </div>
  );
}
