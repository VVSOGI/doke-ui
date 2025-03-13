import React from "react";

interface Props {
  command: string;
}

export function CurlCommand({ command }: Props) {
  return (
    <div className="flex flex-col gap-4 mt-4">
      <div className={`text-white text-2 font-300`}>Example Request</div>
      <div className="w-full h-fit p-8 bg-gray-800 rounded-sm text-white text-1 font-300 whitespace-pre-wrap">
        {command}
      </div>
    </div>
  );
}
