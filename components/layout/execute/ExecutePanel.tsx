import React from "react";
import { Endpoint } from "@/lib/types";
import { Icon } from "@/components";
import { ICONS_LIST } from "@/lib/constants";

interface Props {
  selected: Endpoint | null;
  setSelected: (selected: Endpoint | null) => void;
}

export function ExecutePanel({ selected, setSelected }: Props) {
  const styles = selected ? "flex-2" : "flex-0";
  return (
    <div
      className={`
        sticky top-0 h-screen bg-gray-700 
        ${styles}
      `}
    >
      {selected && (
        <div className="w-full text-end p-7">
          <Icon
            className={`
            text-gray-100 cursor-pointer select-none
            hover:text-gray-400
            active:text-gray-200
          `}
            size="30px"
            icons={ICONS_LIST.CLOSE}
            onClick={() => setSelected(null)}
          />
        </div>
      )}
    </div>
  );
}
