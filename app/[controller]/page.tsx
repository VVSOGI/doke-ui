import { loadApiSchema } from "@/utils/loadApiSchema";

export default async function Page({ params }: { params: Promise<{ controller: string }> }) {
  const { controller } = await params;
  const data = await loadApiSchema(controller);
  return <div className="w-full h-screen flex justify-center items-center">Hello {controller}!</div>;
}
