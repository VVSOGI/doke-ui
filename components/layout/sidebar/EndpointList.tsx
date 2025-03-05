"use client";

import { Icon } from "@/components";
import { SidebarButton } from "@/components/button";
import { useEndpointData } from "@/contexts";
import { ICONS_LIST } from "@/lib/constants";
import { useState } from "react";

export function EndpointList() {
  const { endpointData } = useEndpointData();
  const [currentIndex, setCurrentIndex] = useState("0-0");

  return (
    <div className="flex flex-col gap-4">
      {endpointData.map((data, index) => {
        return (
          <div key={data.controllerName} className="flex flex-col gap-2">
            <div className="flex justify-between py-4 px-6 text-1">
              <div>{data.basePath}</div>
              <Icon icons={ICONS_LIST.ARROW_DROP_DOWN} />
            </div>
            <div className="flex flex-col gap-4">
              {data.endpoints.map((endpoint, endpointIndex) => (
                <SidebarButton active={`${index}-${endpointIndex}` === currentIndex} key={endpoint.name}>
                  {endpoint.name}
                </SidebarButton>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
