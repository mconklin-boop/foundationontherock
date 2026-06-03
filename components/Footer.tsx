import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/donate", label: "Donate" },
  { href: "/contact", label: "Contact" }
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <div className="footer__brand">
            <Image
              src="/foundation-on-the-rock-logo.svg"
              alt=""
              width={72}
              height={72}
              aria-hidden="true"
            />
            <h2>Foundation on the Rock</h2>
          </div>
          <p>
            Faith-based outreach, mentorship, housing stabilization, workforce
            development, financial literacy, transitional support, and community
            care.
          </p>
        </div>
        <div>
          <h3>Quick links</h3>
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <p>(720) 258-6272</p>
          <p>desiree@foundationontherock.org</p>
          <p>foundationontherock.org</p>
          <p className="footer__scripture">
            &quot;God is our refuge and strength, an ever-present help in
            trouble.&quot; - Psalm 46:1
          </p>
          <Link className="button button--primary footer__donate" href="/donate">
            Donate Now
          </Link>
        </div>
      </div>
      <div className="container footer__bottom">
        <p>Copyright {year} Foundation on the Rock. All rights reserved.</p>
        <p>
          {/* TODO: Replace this placeholder with approved nonprofit status, EIN, charitable solicitation, and tax language. */}
          Nonprofit details and tax-deductibility language will be updated when
          available.
        </p>
      </div>
    </footer>
  );
}
