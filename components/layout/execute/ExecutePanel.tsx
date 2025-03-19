"use client";

import React, { memo } from "react";
import { useExecuteCommand } from "@/contexts";
import { useFormattedCommand } from "@/hooks";
import { ApiExecuteButton, CurlCommand, CurlProperties, ExecuteHeader, ExecuteResponseExample } from "@/components";
import { NotoSans } from "@/lib/assets";
import { POSTRequestDefault } from "@/lib/types";

function Component() {
  const { projectData, controllerData, selected, bodyProps, setSelected } = useExecuteCommand();
  const { command, formattedParams, formattedQuerys } = useFormattedCommand();
  const styles = selected ? "flex-1" : "flex-0";

  const onClick = async () => {
    if (!selected) return;

    const defaultBody: POSTRequestDefault = {
      serverUrl: projectData.serverUrl,
      endpoint: "/" + controllerData.basePath,
      method: selected.method,
      params: formattedParams,
      query: formattedQuerys,
      body: bodyProps,
    };

    const response = await fetch(`http://localhost:3001/api`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(defaultBody),
    });
  };

  return (
    selected && (
      <div
        className={`
          sticky top-0 h-screen bg-gray-700 overflow-y-auto custom-scrollbar
          ${styles}
        `}
      >
        <ExecuteHeader onClick={() => setSelected(null)} />
        <div className={`flex flex-col pb-8 px-11 ${NotoSans.className}`}>
          <div className="mb-4 text-5 font-300 text-white">{selected.name}</div>
          <div className="flex gap-4 mb-4 text-3 font-300 text-white">
            <span>{selected.method}</span>
            <span>/{controllerData.basePath + selected.path}</span>
          </div>
          <div className="flex flex-col gap-8">
            <CurlProperties />
            <CurlCommand command={command} />
            <ExecuteResponseExample endpoint={selected} />
            <ApiExecuteButton onClick={onClick} />
          </div>
        </div>
      </div>
    )
  );
}

export const ExecutePanel = memo(Component);
