import "./globals.css";

export const metadata = {
  title: "Tyler Tanaka",
  description:
    "MIT Sloan MBA and venture investor researching AI-enabled company building, consumer health, consumer AI, and AI tools for sales, marketing, and finance."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
