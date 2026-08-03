import Image from "next/image";
import { Footer, Header } from "./components";
import { Disclosure } from "./disclosure";
import { brandAssets, contactEmail } from "./site";

export default function Home() {
  return (
    <main>
      <section className="hero" id="top" aria-labelledby="hero-title">
        <Header />
        <div className="hero-glow glow-one" />
        <div className="hero-glow glow-two" />
        <div className="shell hero-content">
          <Image className="hero-logo" src={brandAssets.lockup} alt="MirrorProxy / Legitils" width={1140} height={240} priority unoptimized />
          <h1 id="hero-title">Legitを貫く。<br />もっと見やすく、<br />もっと自分らしく。</h1>
          <p className="hero-copy">LegitilsとMirrorProxy。Bed Warsのための、ふたつのローカルツール。</p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">プロジェクトを見る</a>
            <a className="button secondary" href="/status">対応状況</a>
          </div>
          <Disclosure className="quick-read" title="LMPについて">
            <p>Legitilsは試合の変化を見つけ、MirrorProxyは自分の画面に見える情報を整えます。併用を推奨していますが、どちらも単体で使えます。</p>
          </Disclosure>
        </div>
      </section>

      <section className="projects shell" id="projects" aria-labelledby="projects-title">
        <h2 className="sr-only" id="projects-title">プロジェクト</h2>
        <div className="project-grid">
          <a className="project-card legitils-card" href="/legitils">
            <span className="status alpha">ALPHA</span>
            <h3>Legitils</h3>
            <p>Cheater DetectとBed Wars QoLのためのMOD。</p>
            <span className="card-action">Legitilsについて <b aria-hidden="true">→</b></span>
          </a>
          <a className="project-card proxy-card" href="/mirrorproxy">
            <span className="status building">BUILDING</span>
            <h3>MirrorProxy</h3>
            <p>Nickのような見た目のカスタマイズを、自分の画面だけで。</p>
            <span className="card-action">MirrorProxyについて <b aria-hidden="true">→</b></span>
          </a>
        </div>
      </section>

      <section className="quiet-panel shell" aria-labelledby="preview-title">
        <div>
          <p className="eyebrow">BUILDING IN PUBLIC</p>
          <h2 id="preview-title">まだ、開発中です。</h2>
        </div>
        <p>対応環境、導入状況、検証中の範囲を正確に記載しています。</p>
        <a className="text-link" href="/status">現在の対応状況を見る <span aria-hidden="true">→</span></a>
      </section>

      <section className="contact-strip shell" aria-label="お問い合わせ">
        <span>Contact</span>
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
      </section>
      <Footer />
    </main>
  );
}
