import { useExecuteCommand } from "@/contexts";
import { useFormattedCommand } from "@/hooks";
import { POSTRequestDefault } from "@/lib/types";
import { useState } from "react";

export function useApiExecute() {
  const { selected, projectData, controllerData, bodyProps } = useExecuteCommand();
  const { formattedParams, formattedQuerys } = useFormattedCommand();
  const [responseData, setResponseData] = useState();

  const onClickExecute = async () => {
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

    setResponseData(await response.json());
  };

  return {
    responseData,
    onClickExecute,
  };
}
