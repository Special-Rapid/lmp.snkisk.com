import Image from "next/image";
import { brandAssets, contactEmail } from "./site";

export function Header() {
  return (
    <header className="site-header shell">
      <a className="brand" href="/" aria-label="LMP トップへ">
        <Image src={brandAssets.mark} alt="" width={50} height={50} unoptimized />
      </a>
      <nav className="nav-links" aria-label="メインナビゲーション">
        <a href="/#projects">Projects</a>
        <a href="/status">Status</a>
        <a href={`mailto:${contactEmail}`}>Contact</a>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer shell">
      <Image src={brandAssets.wordmark} alt="MirrorProxy / Legitils" width={1140} height={180} unoptimized />
      <p>© 2026 LMP.</p>
      <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
    </footer>
  );
}
