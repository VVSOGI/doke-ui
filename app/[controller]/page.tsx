import { ControllerPanel } from "@/components";
import { loadApiSchema } from "@/lib/utils/load";

export default async function Page({ params }: { params: Promise<{ controller: string }> }) {
  const { controller } = await params;
  const data = await loadApiSchema(controller);
  return (
    <div>
      <ControllerPanel data={data} />
    </div>
  );
}
