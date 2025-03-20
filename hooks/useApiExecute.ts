import { useExecuteCommand } from "@/contexts";
import { useFormattedCommand } from "@/hooks";
import { POSTRequestDefault } from "@/lib/types";
import { useEffect, useState } from "react";

export function useApiExecute() {
  const { selected, bodyProps, getFormattedUrl } = useExecuteCommand();
  const { formattedParams, formattedQuerys } = useFormattedCommand();
  const [responseData, setResponseData] = useState<Record<string, any> | Record<string, any>[] | undefined>();

  const onClickExecute = async () => {
    if (!selected) return;

    const defaultBody: POSTRequestDefault = {
      serverUrl: getFormattedUrl(selected),
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

  useEffect(() => {
    return () => {
      setResponseData(undefined);
    };
  }, [selected]);

  return {
    responseData,
    onClickExecute,
  };
}
