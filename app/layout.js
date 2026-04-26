import "./globals.css";

export const metadata = {
  title: "Tyler Tanaka",
  description:
    "MIT Sloan MBA researching AI-enabled company building, consumer health, consumer AI, and high-leverage software for modern operators."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
