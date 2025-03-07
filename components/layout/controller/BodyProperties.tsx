import React from "react";
import { NotoSans } from "@/lib/assets";
import { Body } from "@/lib/types";

interface Props {
  bodyRequest: Body | undefined;
}

export function BodyProperties({ bodyRequest }: Props) {
  return (
    <div>
      <div
        className={`
          w-full border-b border-gray-200 pb-5 text-3 font-300 text-gray-500
          ${NotoSans.className}
        `}
      >
        BODY PROPERTIES
      </div>
      {bodyRequest &&
        Object.entries(bodyRequest.properties).map(([key, value]) => (
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
