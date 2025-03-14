import React, { memo } from "react";

interface Props {
  bodyProps: Record<string, string>;
  setBodyProps: (value: React.SetStateAction<Record<string, string> | undefined>) => void;
}

function Component({ bodyProps, setBodyProps }: Props) {
  return (
    <div className="flex flex-col gap-4">
      {Object.entries(bodyProps).map(([key, value]) => {
        return (
          <div key={key} className="flex flex-col gap-2">
            <div className="text-2 text-white">{key}</div>
            <input
              value={bodyProps[key]}
              onChange={(e) => {
                const newProps = { ...bodyProps };
                newProps[key] = e.currentTarget.value;
                setBodyProps(newProps);
              }}
              className="w-full py-4 px-8 rounded-sm outline-none border-none bg-gray-800 text-1 text-white"
              placeholder={value}
              type="text"
            />
          </div>
        );
      })}
    </div>
  );
}

export const CurlBodyProps = memo(Component);
