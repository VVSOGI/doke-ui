"use client";

import React from "react";
import { NotoSans } from "@/lib/assets";
import { Controller } from "@/lib/types";
import { BodyProperties } from ".";
import { ParamsProperties } from "./ParamsProperties";
import { QueryProperties } from "./QueryProperties";

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
              text-5 font-300 mb-10
              ${NotoSans.className}
            `}
          >
            {endpoint.name}
          </div>
          <div className={`text-2 mb-12 text-gray-700`}>{endpoint.description}</div>
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
