"use client";

import { useState } from "react";
import { useEndpointData } from "@/contexts";
import { Icon, EndpointButton, ControllerButton } from "@/components";
import { ICONS_LIST } from "@/lib/constants";

export function EndpointList() {
  const { endpointData } = useEndpointData();
  const [activeController, setActiveController] = useState([...endpointData.map((_, index) => index)]);
  const [currentIndex, setCurrentIndex] = useState("0-0");

  const onClickController = (index: number) => {
    setActiveController((prev) => {
      if (prev.includes(index)) {
        return prev.filter((endpointIndex) => endpointIndex !== index);
      } else {
        return [...activeController, index];
      }
    });
  };

  const onClickEndpoint = (controllerIndex: number, endpointIndex: number) => {
    setCurrentIndex(`${controllerIndex}-${endpointIndex}`);
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
                {data.endpoints.map((endpoint, endpointIndex) => (
                  <EndpointButton
                    key={endpoint.name}
                    href={data.basePath + "#" + endpoint.name}
                    active={`${index}-${endpointIndex}` === currentIndex}
                    onClick={() => onClickEndpoint(index, endpointIndex)}
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
