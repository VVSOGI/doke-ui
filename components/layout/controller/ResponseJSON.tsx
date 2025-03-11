"use client";

import React, { memo } from "react";
import dynamic from "next/dynamic";
import { PropertyTitle } from "@/components";
import { Endpoint } from "@/lib/types";

interface Props {
  endpoint: Endpoint;
}

function Component({ endpoint }: Props) {
  const ReactJson = dynamic(() => import("react-json-view"), { ssr: false });

  return (
    <div>
      <PropertyTitle properties={{}}>RESPONSE</PropertyTitle>
      <div className="pt-8 px-7">
        <ReactJson src={endpoint.response.example} collapsed={1} displayDataTypes={false} />
      </div>
    </div>
  );
}

export const ResponseJSON = memo(Component);
