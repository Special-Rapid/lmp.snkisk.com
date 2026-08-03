import type { Metadata } from "next";
import { Footer, Header } from "../components";

export const metadata: Metadata = { title: "MirrorProxy" };

export default function MirrorProxyPage() {
  return (
    <main>
      <Header />
      <article className="detail-page shell">
        <p className="eyebrow">02 / BUILDING</p>
        <h1>MirrorProxy</h1>
        <p className="detail-lead">Nickのような見た目のカスタマイズを、自分の画面だけで。</p>

        <section className="details-list" aria-label="MirrorProxyの詳細">
          <details open>
            <summary>提供するカスタマイズ</summary>
            <ul>
              <li>Custom Cape</li>
              <li>Custom Bed Wars Star</li>
              <li>Custom Hypixel Network Level</li>
            </ul>
          </details>
          <details>
            <summary>表示の範囲</summary>
            <p>実際にNickへ変更する機能ではなく、ほかのプレイヤーに見える表示は変えません。</p>
          </details>
          <details>
            <summary>公開状況</summary>
            <p>現在は公開準備中です。実クライアント互換性と対応範囲を継続して検証しています。</p>
          </details>
        </section>
      </article>
      <Footer />
    </main>
  );
}
