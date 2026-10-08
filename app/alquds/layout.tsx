// Restaurant styling and chrome are scoped to this route.
export default function AlQudsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex min-h-dvh flex-col">{children}</div>;
}
