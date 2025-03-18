"use client";

import React, { memo, useEffect, useState } from "react";
import { useExecuteCommand } from "@/contexts";
import { useFormattedCommand } from "@/hooks";
import { Icon } from "@/components";
import { ICONS_LIST } from "@/lib/constants";

function Component() {
  const [isCopied, setIsCopied] = useState(false);
  const { startCommand, headers, bodyProps, queryProps, paramsProps } = useExecuteCommand();
  const { command } = useFormattedCommand({
    startCommand,
    bodyProps,
    queryProps,
    paramsProps,
    headers,
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsCopied(false);
    }, 1500);

    return () => {
      clearTimeout(timeout);
    };
  }, [isCopied]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between text-white text-2 font-400">
        <div>Example Request</div>
        <div className="flex gap-4">
          {isCopied && <div className="text-1 text-white">copied</div>}
          <Icon
            className={`
            cursor-pointer select-none
            hover:text-gray-300
            active:text-gray-100
          `}
            onClick={() => {
              navigator.clipboard.writeText(command);
              setIsCopied(true);
            }}
            icons={ICONS_LIST.ASSIGNMENT}
          />
        </div>
      </div>
      <div className="w-full h-fit p-8 bg-gray-800 rounded-sm text-white text-1 font-300 whitespace-pre-wrap break-all">
        {command}
      </div>
    </div>
  );
}

export const CurlCommand = memo(Component);
