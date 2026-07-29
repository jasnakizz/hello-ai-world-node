export const metadata = {
  title: "Hello AI World",
  description: "A minimal Next.js hello-world app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
