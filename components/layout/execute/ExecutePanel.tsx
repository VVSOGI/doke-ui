"use client";

import React, { memo, useEffect, useState } from "react";
import { CurlCommand, ExecuteHeader, ExecuteResponseExample } from "@/components";
import { NotoSans } from "@/lib/assets";
import { Controller, Endpoint, Project } from "@/lib/types";
import { processQueryParameters, processRequestBody, processUrlParameters } from "@/lib/utils/generateCurlCommand";

interface Props {
  projectData: Project;
  controllerData: Controller;
  selected: Endpoint | null;
  setSelected: (selected: Endpoint | null) => void;
}

function Component({ projectData, controllerData, selected, setSelected }: Props) {
  const [curlCommand, setCurlCommand] = useState("");
  const [bodyProps, setBodyProps] = useState<Record<string, string>>();
  const styles = selected ? "flex-1" : "flex-0";

  useEffect(() => {
    if (!selected) return;
    const url = `${projectData.serverUrl}${controllerData.basePath ? "/" + controllerData.basePath : ""}${
      selected.path
    }`;
    const { body, params, query } = selected.request;
    const { example } = selected.response;

    let processedUrl = url;
    let curlCommand = `curl -X ${selected.method} ${processedUrl} \\\n`;

    if (params) {
      processedUrl = processUrlParameters(processedUrl, params.properties, example);
    }

    if (query) {
      processedUrl = processQueryParameters(processedUrl, query.properties, example);
    }

    if (body) {
      const requestBody = processRequestBody(body.properties, example);
      setBodyProps(requestBody);
      curlCommand += `-H "Content-Type: application/json" \\\n`;
    }

    setCurlCommand(curlCommand);
  }, [selected]);

  return (
    <div
      className={`
        sticky top-0 h-screen bg-gray-700 overflow-y-auto custom-scrollbar
        ${styles}
      `}
    >
      {selected && (
        <div>
          <ExecuteHeader onClick={() => setSelected(null)} />
          <div className={`flex flex-col gap-4 pb-8 px-11 ${NotoSans.className}`}>
            <div className="text-5 font-300 text-white">{selected.name}</div>
            <div className="flex gap-4 text-white text-3 font-300">
              <span>{selected.method}</span>
              <span>/{controllerData.basePath + selected.path}</span>
            </div>
            <div className="flex flex-col gap-4">
              {bodyProps &&
                Object.entries(bodyProps).map(([key, value]) => {
                  return (
                    <div key={key} className="flex flex-col gap-2">
                      <div className="text-2 text-white">{key}</div>
                      <input
                        onChange={(e) => {
                          const newProps = { ...bodyProps };
                          newProps[key] = e.currentTarget.value;
                          setBodyProps(newProps);
                        }}
                        className="w-full py-4 px-8 rounded-sm outline-none border-none bg-gray-800 text-1 text-white"
                        placeholder={value}
                        type="text"
                      />
                    </div>
                  );
                })}
            </div>
            <CurlCommand command={curlCommand} formattedBody={JSON.stringify(bodyProps, null, 2) || undefined} />
            <ExecuteResponseExample endpoint={selected} />
          </div>
        </div>
      )}
    </div>
  );
}

export const ExecutePanel = memo(Component);
