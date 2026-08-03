import type { Metadata } from "next";
import { Footer, Header } from "../components";
import { Disclosure } from "../disclosure";

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
          <Disclosure defaultOpen title="提供するカスタマイズ">
            <ul>
              <li>Custom Cape</li>
              <li>Custom Bed Wars Star</li>
              <li>Custom Hypixel Network Level</li>
            </ul>
          </Disclosure>
          <Disclosure title="表示の範囲">
            <p>実際にNickへ変更する機能ではなく、ほかのプレイヤーに見える表示は変えません。</p>
          </Disclosure>
          <Disclosure title="公開状況">
            <p>現在は公開準備中です。実クライアント互換性と対応範囲を継続して検証しています。</p>
          </Disclosure>
        </section>
      </article>
      <Footer />
    </main>
  );
}
