import { D2CodingBold, D2CodingLight } from "@/assets";
import Link from "next/link";

export function Sidebar() {
  return (
    <div className="w-[275px] h-screen p-6 border-r border-gray-300 bg-white overflow-hidden">
      <Link
        href={"/"}
        className={`
          w-fit flex gap-1 items-center py-4 text-2
          hover:text-gray-500 child:hover:text-blue-200
          active:text-black
          ${D2CodingBold.className}
       `}
      >
        doke <span className="text-blue-100">API</span>
      </Link>
      <div className="w-full h-[calc(100%-2.25rem)] flex flex-col gap-4 py-8 px-4">
        <div className={`text-1 text-gray-600 ${D2CodingLight.className}`}>ENDPOINTS</div>
        <div className="flex flex-col gap-4">
          <div className="py-4 px-6 text-1">todolist</div>
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
      </div>
    </div>
  );
}
