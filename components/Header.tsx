import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/donate", label: "Donate" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link className="brand" href="/" aria-label="Foundation on the Rock home">
          <Image
            className="brand__logo"
            src="/foundation-on-the-rock-logo.svg"
            alt="Foundation on the Rock"
            width={160}
            height={120}
            priority
          />
        </Link>
        <nav className="nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <ButtonLink href="/donate" variant="primary" className="header-donate">
          Donate Now
        </ButtonLink>
      </div>
    </header>
  );
}
