"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Controller } from "@/lib/types";
import { PropertyTitle } from "@/components";
import { EndpointTitle, Properties } from ".";

interface Props {
  data: Controller;
}

export function ControllerPanel({ data }: Props) {
  const ReactJson = dynamic(() => import("react-json-view"), { ssr: false });

  return (
    <div className="w-full h-screen px-12 pb-13 overflow-y-scroll custom-scrollbar">
      {data.endpoints.map((endpoint) => (
        <div id={endpoint.name} key={endpoint.name} className="py-13">
          <EndpointTitle endpoint={endpoint} />
          <div className="mb-12 pr-13 text-2 text-gray-700">{endpoint.description}</div>
          <div className="flex flex-col gap-8">
            <Properties title="BODY PROPERTIES" properties={endpoint.request.body?.properties} />
            <Properties title="PARAMS PROPERTIES" properties={endpoint.request.params?.properties} />
            <Properties title="QUERY PROPERTIES" properties={endpoint.request.query?.properties} />
            <div>
              <PropertyTitle properties={{}}>RESPONSE</PropertyTitle>
              <div className="pt-8 px-7">
                <ReactJson src={endpoint.response.example} collapsed={1} displayDataTypes={false} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
