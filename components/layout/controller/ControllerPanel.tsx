"use client";

import React, { useRef, useState } from "react";
import { useScroll } from "@/hooks";
import { EndpointTitle, Properties, ResponseJSON } from ".";
import { ExecutePanel } from "@/components";
import { Controller, Endpoint } from "@/lib/types";

interface Props {
  data: Controller;
}

export function ControllerPanel({ data }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<Endpoint | null>(null);
  const { isScrolling } = useScroll({ containerRef });

  return (
    <div className="relative h-screen flex">
      <div ref={containerRef} className="flex-3 overflow-y-scroll custom-scrollbar">
        {data.endpoints.map((endpoint) => (
          <div key={endpoint.name} id={endpoint.name} className="px-12 py-13">
            <EndpointTitle endpoint={endpoint} isScrolling={isScrolling} setSelected={setSelected} />
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
      <ExecutePanel selected={selected} setSelected={setSelected} />
    </div>
  );
}
