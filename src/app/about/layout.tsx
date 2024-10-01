

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>Nested custom layout</div>
      {children}
      <div>Nested custom layout 2</div>
    </div>
  );
}
