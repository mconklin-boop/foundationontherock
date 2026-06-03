import Image from "next/image";
import Link from "next/link";
import { contact } from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/donate", label: "Donate" },
  { href: "/prayer-requests", label: "Prayer Requests" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/devotionals", label: "Devotionals" },
  { href: "/contact", label: "Contact" }
];

const trustLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
  { href: "/donation-disclaimer", label: "Donation Disclaimer" }
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
          <p>{contact.phone}</p>
          <p>{contact.email}</p>
          <p>{contact.domain}</p>
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
        <div className="footer__legal">
          {trustLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
