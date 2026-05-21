import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Foundation on the Rock | Helping Families Rebuild",
    template: "%s | Foundation on the Rock"
  },
  description:
    "Foundation on the Rock is a faith-based nonprofit helping families, individuals, and communities rebuild on a stable foundation."
};

const navItems = [
  ["/", "Home"],
  ["/about", "About"],
  ["/programs", "Programs"],
  ["/get-involved", "Get Involved"],
  ["/donate", "Donate"],
  ["/contact", "Contact"]
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container header-inner">
            <a className="brand" href="/" aria-label="Foundation on the Rock home">
              <img src="/foundation-on-the-rock-logo.svg" alt="Foundation on the Rock" />
            </a>
            <nav aria-label="Primary navigation">
              {navItems.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
            </nav>
            <a className="button button-gold header-donate" href="/donate">Donate</a>
          </div>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <div className="container footer-grid">
            <div>
              <div className="footer-brand"><img src="/foundation-on-the-rock-logo.svg" alt="" aria-hidden="true" /><h2>Foundation on the Rock</h2></div>
              <p>Compassionate, faith-centered support that helps people stabilize, rebuild, and move forward with dignity.</p>
            </div>
            <div><h3>Quick links</h3>{navItems.slice(1).map(([href, label]) => <a key={href} href={href}>{label}</a>)}</div>
            <div><h3>Contact</h3><p>info@foundationontherock.org</p><p>Mailing address coming soon</p></div>
          </div>
          <div className="container footer-bottom"><p>Copyright {new Date().getFullYear()} Foundation on the Rock. All rights reserved.</p><p>Nonprofit details and tax-deductibility language will be updated when available.</p></div>
        </footer>
      </body>
    </html>
  );
}
