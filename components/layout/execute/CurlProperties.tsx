import { CurlProperty } from "@/components";
import { useExecuteCommand } from "@/contexts";
import React, { memo } from "react";

function Component() {
  const { bodyProps, paramsProps, queryProps, setBodyProps, setParamsProps, setQueryProps } = useExecuteCommand();

  return (
    <div className="flex flex-col gap-8">
      {bodyProps && <CurlProperty title="BODY PROPERTIES" properties={bodyProps} setProperties={setBodyProps} />}
      {paramsProps && (
        <CurlProperty title="PARAMS PROPERTIES" properties={paramsProps} setProperties={setParamsProps} />
      )}
      {queryProps && <CurlProperty title="QUERY PROPERTIES" properties={queryProps} setProperties={setQueryProps} />}
    </div>
  );
}

export const CurlProperties = memo(Component);
