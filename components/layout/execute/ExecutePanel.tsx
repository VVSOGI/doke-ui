"use client";

import React, { memo, useEffect, useState } from "react";
import { Icon, JsonView } from "@/components";
import { NotoSans } from "@/lib/assets";
import { ICONS_LIST } from "@/lib/constants";
import { Controller, DefaultProperty, Endpoint, Project } from "@/lib/types";
import { processQueryParameters, processRequestBody, processUrlParameters } from "@/lib/utils/generateCurlCommand";

interface Props {
  projectData: Project;
  controllerData: Controller;
  selected: Endpoint | null;
  setSelected: (selected: Endpoint | null) => void;
}

function Component({ projectData, controllerData, selected, setSelected }: Props) {
  const [curlCommand, setCurlCommand] = useState("");
  const [bodyProps, setBodyProps] = useState<Record<string, DefaultProperty>>();
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

  useEffect(() => {
    const formattedBody = JSON.stringify(bodyProps, null, 2);
    setCurlCommand(curlCommand + `-d '${formattedBody}'`);
  }, [bodyProps]);

  return (
    <div
      className={`
        sticky top-0 h-screen bg-gray-700 overflow-y-auto custom-scrollbar
        ${styles}
      `}
    >
      {selected && (
        <div>
          <div className="w-full text-end p-7 pb-0">
            <Icon
              className={`
                text-gray-100 cursor-pointer select-none
                hover:text-gray-400
                active:text-gray-200
              `}
              size="30px"
              icons={ICONS_LIST.CLOSE}
              onClick={() => setSelected(null)}
            />
          </div>
          <div className={`flex flex-col gap-4 pb-8 px-11 ${NotoSans.className}`}>
            <div className="text-5 font-300 text-white">{selected.name}</div>
            <div className="flex gap-4 text-white text-3 font-300">
              <span>{selected.method}</span>
              <span>/{controllerData.basePath + selected.path}</span>
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <div className={`text-white text-2 font-300`}>Example Request</div>
              <div className="w-full h-fit p-8 bg-gray-800 rounded-sm text-white text-1 font-300 whitespace-pre-wrap">
                {curlCommand}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className={`text-white text-2 font-300`}>Example Response</div>
              <div className="w-full h-fit p-8 bg-gray-800 rounded-sm">
                <JsonView
                  src={selected.response.example}
                  theme={"chalk"}
                  style={{ backgroundColor: "transparent" }}
                  displayObjectSize={false}
                  enableClipboard={false}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export const ExecutePanel = memo(Component);
