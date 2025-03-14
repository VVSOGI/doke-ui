import React, { memo } from "react";

interface Props {
  startCommand: string;
  headers: string;
  formattedBody: string | undefined;
  formattedParams: string;
}

function Component({ startCommand, headers, formattedBody, formattedParams }: Props) {
  return (
    <div className="flex flex-col gap-4 mt-4">
      <div className={`text-white text-2 font-400`}>Example Request</div>
      <div className="w-full h-fit p-8 bg-gray-800 rounded-sm text-white text-1 font-300 whitespace-pre-wrap break-all">
        {startCommand}
        {formattedParams}
        {headers && ` \\\n${headers}`}
        {formattedBody && `-d ${formattedBody}`}
      </div>
    </div>
  );
}

export const CurlCommand = memo(Component);
