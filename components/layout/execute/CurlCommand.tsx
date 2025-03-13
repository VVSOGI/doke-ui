import React, { memo } from "react";

interface Props {
  command: string;
  formattedBody: string | undefined;
}

function Component({ command, formattedBody }: Props) {
  return (
    <div className="flex flex-col gap-4 mt-4">
      <div className={`text-white text-2 font-400`}>Example Request</div>
      <div className="w-full h-fit p-8 bg-gray-800 rounded-sm text-white text-1 font-300 whitespace-pre-wrap">
        {command}
        {formattedBody ? `-d '${formattedBody}'` : ""}
      </div>
    </div>
  );
}

export const CurlCommand = memo(Component);
