import React, { memo } from "react";
import { JsonView } from "@/components";
import { Endpoint } from "@/lib/types";

interface Props {
  endpoint: Endpoint;
}

function Component({ endpoint }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <div className={`text-white text-2 font-400`}>Example Response</div>
      <div className="w-full h-fit p-8 bg-gray-800 rounded-sm">
        <JsonView
          src={endpoint.response.example}
          theme={"chalk"}
          style={{ backgroundColor: "transparent" }}
          displayObjectSize={false}
          enableClipboard={false}
        />
      </div>
    </div>
  );
}

export const ExecuteResponseExample = memo(Component);
