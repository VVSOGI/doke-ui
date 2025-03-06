"use client";

import { NotoSans } from "@/lib/assets";
import { Controller } from "@/lib/types";
import React from "react";

interface Props {
  data: Controller;
}

export function ControllerPanel({ data }: Props) {
  return (
    <div className="w-full h-screen px-12 pt-13 overflow-y-scroll custom-scrollbar">
      <div
        className={`
          text-5 font-300 mb-10
          ${NotoSans.className}
        `}
      >
        Craete Category
      </div>
      <div
        className={`
          text-2 mb-12 text-gray-700
        `}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, sed! Vero suscipit distinctio incidunt sit
        iste totam quidem nostrum eum, nihil repudiandae inventore animi vel repellendus eveniet. Modi, perferendis
        corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur dignissimos nisi atque
        beatae, laudantium porro. Recusandae, modi perferendis. Cumque, mollitia ut vitae modi esse tempora porro ea
        fugit voluptates!
      </div>
      <div
        className={`
          w-full border-b border-gray-200 pb-5 text-3 font-300 text-gray-500
          ${NotoSans.className}
        `}
      >
        PROPERTIES
      </div>
      <div className="flex p-8 border-b">
        <div className="flex-1 flex flex-col gap-1">
          <div className="text-2">title</div>
          <div className={`text-0 text-red-300 ${NotoSans.className}`}>REQUIRED</div>
        </div>
        <div className="flex-2 text-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus modi commodi velit, recusandae iusto
          deserunt nostrum quasi nisi sint. Veniam dolorem sequi enim dignissimos impedit hic. Quas maiores accusantium
          optio? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, corporis rem. Laboriosam nesciunt,
          recusandae quo minus repellendus quam ab obcaecati ipsum excepturi ratione, exercitationem quis nam nisi nemo
          totam dolor.
        </div>
      </div>
      <div className="flex p-8 border-b">
        <div className="flex-1 flex flex-col gap-1">
          <div className="text-2">title</div>
          <div className={`text-0 text-gray-500 ${NotoSans.className}`}>OPTIONAL</div>
        </div>
        <div className="flex-2 text-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus modi commodi velit, recusandae iusto
          deserunt nostrum quasi nisi sint. Veniam dolorem sequi enim dignissimos impedit hic. Quas maiores accusantium
          optio? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, corporis rem. Laboriosam nesciunt,
          recusandae quo minus repellendus quam ab obcaecati ipsum excepturi ratione, exercitationem quis nam nisi nemo
          totam dolor.
        </div>
      </div>
    </div>
  );
}
