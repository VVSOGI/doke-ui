import React, { memo } from "react";
import { CurlPropertyInput } from "@/components";

interface Props {
  title: string;
  properties: Record<string, string>;
  setProperties: (value: React.SetStateAction<Record<string, string> | undefined>) => void;
}

function Component({ title, properties, setProperties }: Props) {
  return (
    <div className="flex flex-col">
      <div className="py-2 text-2 text-white border-b border-gray-300">{title}</div>
      <div className="py-4">
        <CurlPropertyInput properties={properties} setProperties={setProperties} />
      </div>
    </div>
  );
}

export const CurlProperty = memo(Component);
