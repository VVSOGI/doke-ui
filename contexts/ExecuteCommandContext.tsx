"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Controller, Endpoint, Project } from "@/lib/types";
import { processQueryParameters, processRequestBody, processUrlParameters } from "@/lib/utils/generateCurlCommand";

interface ExecuteCommandContextType {
  projectData: Project;
  controllerData: Controller;
  selected: Endpoint | null;
  startCommand: string;
  headers: string;
  bodyProps: Record<string, string> | undefined;
  queryProps: Record<string, string> | undefined;
  paramsProps: Record<string, string> | undefined;
  setSelected: (selected: Endpoint | null) => void;
  setBodyProps: React.Dispatch<React.SetStateAction<Record<string, string> | undefined>>;
  setParamsProps: React.Dispatch<React.SetStateAction<Record<string, string> | undefined>>;
  setQueryProps: React.Dispatch<React.SetStateAction<Record<string, string> | undefined>>;
}

const ExecuteCommandContext = createContext<ExecuteCommandContextType | undefined>(undefined);

interface ExecuteCommandProviderProps {
  children: ReactNode;
  projectData: Project;
  controllerData: Controller;
  selected: Endpoint | null;
  setSelected: (selected: Endpoint | null) => void;
}

export function ExecuteCommandProvider({
  children,
  projectData,
  controllerData,
  selected,
  setSelected,
}: ExecuteCommandProviderProps) {
  const [startCommand, setStartCurlCommand] = useState("");
  const [headers, setHeaders] = useState("");
  const [bodyProps, setBodyProps] = useState<Record<string, string>>();
  const [queryProps, setQueryProps] = useState<Record<string, string>>();
  const [paramsProps, setParamsProps] = useState<Record<string, string>>();

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
      const requestQuery = processQueryParameters(query.properties);
      setQueryProps(requestQuery);
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
      setQueryProps(undefined);
      setHeaders("");
    };
  }, [selected]);

  const value = {
    projectData,
    controllerData,
    selected,
    startCommand,
    headers,
    bodyProps,
    queryProps,
    paramsProps,
    setSelected,
    setBodyProps,
    setParamsProps,
    setQueryProps,
  };

  return <ExecuteCommandContext.Provider value={value}>{children}</ExecuteCommandContext.Provider>;
}

export function useExecuteCommand() {
  const context = useContext(ExecuteCommandContext);

  if (context === undefined) {
    throw new Error("useExecuteCommand must be used within an ExecuteCommandProvider");
  }

  return context;
}
