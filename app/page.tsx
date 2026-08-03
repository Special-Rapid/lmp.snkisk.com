import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <nav className="nav shell" aria-label="メインナビゲーション">
          <a className="brand" href="#top" aria-label="LMP トップへ">
            <Image
              src="https://images.snkisk.com/lmp.snkisk.com/images/20da28da-6c26-4ae0-a0ba-9e320e3e0730.svg"
              alt=""
              width={36}
              height={36}
              unoptimized
            />
            <span>LMP</span>
          </a>
          <div className="nav-links">
            <a href="#projects">プロジェクト</a>
            <a href="#compatibility">対応環境</a>
            <a href="mailto:contact@snkisk.com">Contact</a>
          </div>
        </nav>

        <div className="hero-glow glow-one" />
        <div className="hero-glow glow-two" />
        <div className="shell hero-content" id="top">
          <p className="eyebrow">DEVELOPMENT PREVIEW</p>
          <Image
            className="hero-logo"
            src="https://images.snkisk.com/lmp.snkisk.com/images/36d5d366-2533-450d-b6fb-9e74a6d9d8aa.svg"
            alt="MirrorProxy / Legitils"
            width={1140}
            height={240}
            priority
            unoptimized
          />
          <h1 id="hero-title">
            Legitを貫く。
            <br />
            Bed Warsをもっと見やすく、
            <br />
            もっと自分らしく。
          </h1>
          <p className="hero-copy">
            LMPは、Cheater DetectとBed Wars QoLのためのLegitils、そしてCustom Cape・Custom Bed Wars Star・Custom Hypixel Network Levelを提供するMirrorProxyをまとめた開発中ツールセットです。
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">プロジェクトを見る</a>
            <a className="button secondary" href="mailto:contact@snkisk.com">お問い合わせ</a>
          </div>
          <p className="hero-note">Minecraft 1.8.9 · Development Preview · 併用推奨、単体利用も可能</p>
        </div>
      </section>

      <section className="intro shell" aria-label="LMPについて">
        <div className="section-kicker">ONE SET, TWO TOOLS</div>
        <p>
          戦い方を変えるのではなく、判断に必要な情報と、自分のための見た目を整える。LMPはそれぞれの役割を保ったまま、LegitilsとMirrorProxyを一緒に使えるようにします。
        </p>
      </section>

      <section className="projects shell" id="projects" aria-labelledby="projects-title">
        <div className="section-heading">
          <p className="eyebrow">PROJECTS</p>
          <h2 id="projects-title">それぞれに、はっきりした役割を。</h2>
        </div>
        <div className="project-grid">
          <article className="project-card legitils-card">
            <div className="card-topline">
              <span className="card-index">01</span>
              <span className="status alpha">ALPHA</span>
            </div>
            <h3>Legitils</h3>
            <p className="card-lead">Legitを貫く。Cheater DetectとBed Wars QoLのためのMOD。</p>
            <ul>
              <li>不正の可能性に注意を向けるCheater Detect</li>
              <li>Party参加・離脱通知など、Bed Wars向けQoL</li>
              <li>観測結果・設定は端末内に保存</li>
            </ul>
            <p className="card-note">通知は注意を促すシグナルであり、不正を断定するものではありません。</p>
            <a className="text-link" href="https://github.com/Special-Rapid/Legitils" target="_blank" rel="noreferrer">
              GitHubでLegitilsを見る <span aria-hidden="true">↗</span>
            </a>
          </article>

          <article className="project-card proxy-card">
            <div className="card-topline">
              <span className="card-index">02</span>
              <span className="status building">BUILDING</span>
            </div>
            <h3>MirrorProxy</h3>
            <p className="card-lead">Nickのような見た目のカスタマイズを、自分の画面だけで。</p>
            <ul>
              <li>Custom Cape</li>
              <li>Custom Bed Wars Star</li>
              <li>Custom Hypixel Network Level</li>
            </ul>
            <p className="card-note">実際にNickへ変更する機能ではなく、ほかのプレイヤーに見える表示は変えません。</p>
            <span className="text-link muted">公開準備中</span>
          </article>
        </div>
      </section>

      <section className="flow-section">
        <div className="shell flow-wrap">
          <div className="section-heading">
            <p className="eyebrow">HOW THEY FIT</p>
            <h2>見つける。整える。<br />どちらも、あなたのために。</h2>
          </div>
          <ol className="flow-list">
            <li>
              <span>01</span>
              <div><strong>Observe</strong><p>Legitilsが試合中のシグナルとBed Warsの変化を知らせます。</p></div>
            </li>
            <li>
              <span>02</span>
              <div><strong>Customize</strong><p>MirrorProxyが、自分の画面に見える情報を自分好みに整えます。</p></div>
            </li>
            <li>
              <span>03</span>
              <div><strong>Stay Legit</strong><p>操作の自動化や公平性を壊す機能を目的にしません。</p></div>
            </li>
          </ol>
        </div>
      </section>

      <section className="compatibility shell" id="compatibility" aria-labelledby="compatibility-title">
        <div className="section-heading">
          <p className="eyebrow">COMPATIBILITY</p>
          <h2 id="compatibility-title">いま公開できる、正確な範囲。</h2>
        </div>
        <div className="compatibility-grid">
          <div><span>GAME</span><strong>Minecraft 1.8.9</strong></div>
          <div><span>CLIENT</span><strong>Lunar Clientを対象に開発</strong></div>
          <div><span>macOS</span><strong>主な導入・起動導線として開発中</strong></div>
          <div><span>WINDOWS / LINUX</span><strong>個人での導入は可能。公式導線は未定</strong></div>
        </div>
      </section>

      <section className="preview shell" aria-labelledby="preview-title">
        <div>
          <p className="eyebrow">BUILDING IN PUBLIC</p>
          <h2 id="preview-title">まだ完成ではない。<br />だから、正確に伝える。</h2>
        </div>
        <p>
          LMPは現在Development Previewです。Legitilsの実機互換性・各シグナルの精度、MirrorProxyの実クライアント互換性と対応範囲を継続して検証しています。完成済みの統合インストーラーではありません。
        </p>
      </section>

      <footer className="footer shell">
        <Image
          src="https://images.snkisk.com/lmp.snkisk.com/images/85b94573-797d-472c-b8c3-e8acde115ad4.svg"
          alt="MirrorProxy / Legitils"
          width={1140}
          height={180}
          unoptimized
        />
        <p>© 2026 LMP. Development Preview.</p>
        <a href="mailto:contact@snkisk.com">contact@snkisk.com</a>
      </footer>
    </main>
  );
}
