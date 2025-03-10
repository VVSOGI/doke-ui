"use client";

import React from "react";
import { NotoSans } from "@/lib/assets";
import { Controller } from "@/lib/types";
import { BodyProperties, ParamsProperties, QueryProperties } from ".";

interface Props {
  data: Controller;
}

export function ControllerPanel({ data }: Props) {
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
            <BodyProperties bodyRequest={endpoint.request.body} />
            <ParamsProperties paramsRequest={endpoint.request.params} />
            <QueryProperties queryRequest={endpoint.request.query} />
          </div>
        </div>
      ))}
    </div>
  );
}
