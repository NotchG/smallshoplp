import type { Metadata } from "next";
import "./globals.css";
import Nav from "./Nav";

export const metadata: Metadata = { title: "smallshoplp · approvals" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="shell">
          <Nav />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
