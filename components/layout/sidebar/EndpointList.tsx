"use client";

import { useState } from "react";
import { Icon } from "@/components";
import { ICONS_LIST } from "@/lib/constants";
import { Controller } from "@/lib/types";

interface Props {
  list: Controller[];
}

export function EndpointList({ list }: Props) {
  useState();
  return (
    <div className="flex flex-col">
      <div className="flex justify-between py-4 px-6 text-1">
        <div>todolist</div>
        <Icon icons={ICONS_LIST.ARROW_DROP_DOWN} />
      </div>
      <div className="flex flex-col gap-4">
        <div className="mx-6 py-4 px-8 rounded-md text-0 text-blue-100">
          <div>CreateTodolist (POST /)</div>
        </div>
        <div className="mx-6 py-4 px-8 rounded-md text-0">
          <div>GetTodolists</div>
        </div>
        <div className="mx-6 py-4 px-8 rounded-md text-0">
          <div>GetTodolistsByCategoryId</div>
        </div>
        <div className="mx-6 py-4 px-8 rounded-md text-0">
          <div>GetTodolistsByDate</div>
        </div>
        <div className="mx-6 py-4 px-8 rounded-md text-0">
          <div>UpdateTodo</div>
        </div>
        <div className="mx-6 py-4 px-8 rounded-md text-0">
          <div>UpdateTodoOrder</div>
        </div>
      </div>
    </div>
  );
}
