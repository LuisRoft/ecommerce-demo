import Sidebar from "@/components/products/side-bar";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />

      <div className="flex-1 p-8  border-l border-neutral-800">{children}</div>
    </div>
  );
}
