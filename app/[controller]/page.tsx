export default async function Page({ params }: { params: Promise<{ controller: string }> }) {
  const { controller } = await params;
  return <div className="w-full h-screen flex justify-center items-center">Hello {controller}!</div>;
}
