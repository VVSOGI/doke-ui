import { Sidebar } from "@/components/layout";
import { loadApiSchema, loadProjectData } from "@/lib/utils";

export default async function Home() {
  const projects = await loadProjectData();
  const endpoints = [];
  for (const route of projects.routes) {
    endpoints.push(await loadApiSchema(route));
  }

  return (
    <div className="w-full h-screen">
      <Sidebar list={endpoints} />
    </div>
  );
}
