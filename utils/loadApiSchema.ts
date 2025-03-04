import { Controller } from "@/types";
import fs from "fs/promises";
import path from "path";

export async function loadApiSchema(name: string) {
  const jsonPath = path.join(process.cwd(), "api-docs", "routes", `${name}.json`);
  const response = await fs.readFile(jsonPath, "utf-8");
  const data: Controller = JSON.parse(response);

  return data;
}
