import React from "react";
import { PropertyTitle } from "@/components";
import { NotoSans } from "@/lib/assets";
import { Query } from "@/lib/types";

interface Props {
  queryRequest: Query | undefined;
}

export function QueryProperties({ queryRequest }: Props) {
  return (
    <div>
      <PropertyTitle>QUERY PROPERTIES</PropertyTitle>
      {queryRequest &&
        Object.entries(queryRequest.properties).map(([key, value]) => (
          <div key={key} className="flex p-8 border-b">
            <div className="flex-1 flex flex-col gap-1">
              <div className="text-2">{key}</div>
              {value.required ? (
                <div className={`text-0 text-red-300 ${NotoSans.className}`}>REQUIRED</div>
              ) : (
                <div className={`text-0 text-gray-500 ${NotoSans.className}`}>OPTIONAL</div>
              )}
            </div>
            <div className="flex-2 text-1">{value.description}</div>
          </div>
        ))}
    </div>
  );
}
