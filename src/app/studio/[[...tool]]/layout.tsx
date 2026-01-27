export const metadata = {
  title: 'Ledia Çeta - Studio',
  description: 'Content management studio',
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
