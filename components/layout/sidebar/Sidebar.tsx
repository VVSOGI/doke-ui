export function Sidebar() {
  return (
    <div className="w-[275px] h-screen border-r border-gray-300 bg-white p-8 overflow-hidden">
      <div className="w-full h-[52px] flex items-center border-b border-gray-300">header line</div>
      <div className="w-full h-[calc(100%-52px)] py-8">list</div>
    </div>
  );
}
