import { useEffect, useState } from "react";
import { useExecuteCommand } from "@/contexts";

export function useFormattedCommand() {
  const { startCommand, bodyProps, queryProps, paramsProps, headers } = useExecuteCommand();
  const [formattedBodies, setFormattedBodies] = useState("");
  const [formattedQuerys, setFormattedQuerys] = useState("");
  const [formattedParams, setFormattedParams] = useState("");

  useEffect(() => {
    return () => {
      setFormattedBodies("");
      setFormattedQuerys("");
      setFormattedParams("");
    };
  }, [startCommand, headers, bodyProps, queryProps, paramsProps]);

  useEffect(() => {
    if (!bodyProps) return;
    setFormattedBodies(JSON.stringify(bodyProps, null, 2));
  }, [bodyProps]);

  useEffect(() => {
    if (!paramsProps) return;
    const commands = Object.entries(paramsProps).map(([key, value], index) => {
      if (index === 0) {
        return `/${value}`;
      } else {
        return `/${key}/${value}`;
      }
    });
    setFormattedParams(commands.join(""));
  }, [paramsProps]);

  useEffect(() => {
    if (!queryProps) return;
    const commands = Object.entries(queryProps).map(([key, value], index) => {
      if (index === 0) {
        return `?${key}=${value}`;
      } else {
        return `&${key}=${value}`;
      }
    });
    setFormattedQuerys(commands.join(""));
  }, [queryProps]);

  return {
    command:
      startCommand +
      formattedParams +
      formattedQuerys +
      (headers && ` \\\n${headers}`) +
      (formattedBodies && `-d '${formattedBodies}'`),
    formattedQuerys,
    formattedParams,
  };
}
