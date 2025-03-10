"use client";

import React from "react";
import dynamic from "next/dynamic";
import { NotoSans } from "@/lib/assets";
import { Controller } from "@/lib/types";
import { PropertyTitle } from "@/components";
import { Properties } from ".";

interface Props {
  data: Controller;
}

export function ControllerPanel({ data }: Props) {
  const ReactJson = dynamic(() => import("react-json-view"), { ssr: false });

  return (
    <div className="w-full h-screen px-12 pb-13 overflow-y-scroll custom-scrollbar">
      {data.endpoints.map((endpoint) => (
        <div id={endpoint.name} key={endpoint.name} className="py-13">
          <div
            className={`
              flex gap-8 mb-10 text-5 font-300
              ${NotoSans.className}
            `}
          >
            <div
              className={`px-4 text-white rounded-md
                ${endpoint.method === "POST" && "bg-green-300"}
                ${endpoint.method === "GET" && "bg-blue-200"}
                ${endpoint.method === "PATCH" && "bg-mint-300"}
                ${endpoint.method === "PUT" && "bg-mint-300"}
                ${endpoint.method === "DELETE" && "bg-red-200"}
              `}
            >
              {endpoint.method}/
            </div>
            <div>{endpoint.name}</div>
          </div>
          <div className="mb-12 pr-13 text-2 text-gray-700">{endpoint.description}</div>
          <div className="flex flex-col gap-8">
            <Properties properties={endpoint.request.body?.properties} />
            <Properties properties={endpoint.request.params?.properties} />
            <Properties properties={endpoint.request.query?.properties} />
            <div>
              <PropertyTitle properties={{}}>RESPONSE</PropertyTitle>
              <div className="pt-8 px-7">
                <ReactJson src={endpoint.response.example} collapsed={2} displayDataTypes={false} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
