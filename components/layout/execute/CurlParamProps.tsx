import React from "react";

interface Props {
  paramsProps: Record<string, string>;
  setParamsProps: (value: React.SetStateAction<Record<string, string> | undefined>) => void;
}

export function CurlParamProps({ paramsProps, setParamsProps }: Props) {
  return (
    <div className="flex flex-col gap-4">
      {Object.entries(paramsProps).map(([key]) => {
        return (
          <div key={key} className="flex flex-col gap-2">
            <div className="text-2 text-white">{key}</div>
            <input
              value={paramsProps[key]}
              onChange={(e) => {
                const newProps = { ...paramsProps };
                newProps[key] = e.currentTarget.value;
                setParamsProps(newProps);
              }}
              className="w-full py-4 px-8 rounded-sm outline-none border-none bg-gray-800 text-1 text-white"
              placeholder={"Please enter a valid value."}
              type="text"
            />
          </div>
        );
      })}
    </div>
  );
}
