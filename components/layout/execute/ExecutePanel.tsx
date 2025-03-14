"use client";

import React, { memo, useEffect, useState } from "react";
import { CurlBodyProps, CurlCommand, ExecuteHeader, ExecuteResponseExample } from "@/components";
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
  const [startCommand, setStartCurlCommand] = useState("");
  const [headers, setHeaders] = useState("");
  const [bodyProps, setBodyProps] = useState<Record<string, string>>();
  const [paramsProps, setParamsProps] = useState<Record<string, string>>();
  const styles = selected ? "flex-1" : "flex-0";

  useEffect(() => {
    if (!selected) return;
    const url = `${projectData.serverUrl}${controllerData.basePath ? "/" + controllerData.basePath : ""}`;
    const { body, params, query } = selected.request;
    const { example } = selected.response;

    let processedUrl = url;
    let startCommand = `curl -X ${selected.method} ${processedUrl}`;

    if (params) {
      const requestParams = processUrlParameters(params.properties, example);
      setParamsProps(requestParams);
    }

    if (query) {
      processedUrl = processQueryParameters(processedUrl, query.properties, example);
    }

    if (body) {
      const requestBody = processRequestBody(body.properties, example);
      setBodyProps(requestBody);
      setHeaders((prev) => prev + `-H "Content-Type: application/json" \\\n`);
    }

    setStartCurlCommand(startCommand);

    return () => {
      setBodyProps(undefined);
      setParamsProps(undefined);
      setHeaders("");
    };
  }, [selected]);

  return (
    <div
      className={`
        sticky top-0 h-screen bg-gray-700 overflow-y-auto custom-scrollbar
        ${styles}
      `}
    >
      {selected && (
        <>
          <ExecuteHeader onClick={() => setSelected(null)} />
          <div className={`flex flex-col gap-4 pb-8 px-11 ${NotoSans.className}`}>
            <div className="text-5 font-300 text-white">{selected.name}</div>
            <div className="flex gap-4 text-white text-3 font-300">
              <span>{selected.method}</span>
              <span>/{controllerData.basePath + selected.path}</span>
            </div>
            <CurlBodyProps bodyProps={bodyProps} setBodyProps={setBodyProps} />
            <CurlCommand
              startCommand={startCommand}
              headers={headers}
              formattedBody={JSON.stringify(bodyProps, null, 2) || undefined}
            />
            <ExecuteResponseExample endpoint={selected} />
          </div>
        </>
      )}
    </div>
  );
}

export const ExecutePanel = memo(Component);
