"use client";

import React, { useRef } from "react";
import { useScroll } from "@/hooks";
import { EndpointTitle, Properties, ResponseJSON } from ".";
import { Controller } from "@/lib/types";

interface Props {
  data: Controller;
}

export function ControllerPanel({ data }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isScrolling } = useScroll({ containerRef });

  return (
    <div ref={containerRef} className="w-full h-screen px-12 pb-13 overflow-y-scroll custom-scrollbar">
      {data.endpoints.map((endpoint) => (
        <div id={endpoint.name} key={endpoint.name} className="py-13">
          <EndpointTitle endpoint={endpoint} isScrolling={isScrolling} />
          <div className="mb-12 pr-13 text-2 text-gray-700">{endpoint.description}</div>
          <div className="flex flex-col gap-8">
            <Properties title="BODY PROPERTIES" properties={endpoint.request.body?.properties} />
            <Properties title="PARAMS PROPERTIES" properties={endpoint.request.params?.properties} />
            <Properties title="QUERY PROPERTIES" properties={endpoint.request.query?.properties} />
            <ResponseJSON endpoint={endpoint} />
          </div>
        </div>
      ))}
    </div>
  );
}
