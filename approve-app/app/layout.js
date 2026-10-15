import "./globals.css";
import Nav from "./Nav";

export const metadata = { title: "smallshoplp · approvals" };

export default function RootLayout({ children }) {
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
