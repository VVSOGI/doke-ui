"use client";

import { useState } from "react";
import { useActiveSection, useEndpointData } from "@/contexts";
import { Icon, EndpointButton, ControllerButton } from "@/components";
import { ICONS_LIST } from "@/lib/constants";

export function EndpointList() {
  const { endpointData } = useEndpointData();
  const { activeSection, changeSection } = useActiveSection();
  const [activeController, setActiveController] = useState([...endpointData.map((_, index) => index)]);

  const onClickController = (index: number) => {
    setActiveController((prev) => {
      if (prev.includes(index)) {
        return prev.filter((endpointIndex) => endpointIndex !== index);
      } else {
        return [...activeController, index];
      }
    });
  };

  return (
    <div className="flex flex-col gap-4">
      {endpointData.map((data, index) => {
        return (
          <div key={data.controllerName} className="flex flex-col gap-4">
            <ControllerButton onClick={() => onClickController(index)}>
              <div>{data.basePath.toUpperCase()}</div>
              <Icon icons={activeController.includes(index) ? ICONS_LIST.ARROW_DROP_DOWN : ICONS_LIST.ARROW_DROP_UP} />
            </ControllerButton>
            {activeController.includes(index) && (
              <div className="flex flex-col gap-4 mb-4">
                {data.endpoints.map((endpoint) => (
                  <EndpointButton
                    key={endpoint.name}
                    href={data.basePath + "#" + endpoint.name}
                    active={endpoint.name === activeSection}
                    onClick={() => changeSection(endpoint.name)}
                  >
                    {endpoint.name}
                  </EndpointButton>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
