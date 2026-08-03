import type { Metadata } from "next";
import { Footer, Header } from "../components";
import { Disclosure } from "../disclosure";

export const metadata: Metadata = { title: "対応状況" };

export default function StatusPage() {
  return (
    <main>
      <Header />
      <article className="detail-page shell">
        <p className="eyebrow">STATUS</p>
        <h1>現在の対応状況</h1>
        <p className="detail-lead">完成済みの統合インストーラーではありません。確認できている範囲だけを掲載しています。</p>

        <section className="status-projects" aria-label="プロジェクト別の対応状況">
          <section className="status-project legitils-status">
            <p className="eyebrow">LEGITILS / ALPHA</p>
            <h2>Legitils</h2>
            <p>Minecraft 1.8.9とLunar Clientを対象に開発しています。</p>
            <Disclosure defaultOpen title="確認中の範囲">
              <p>実機互換性と、Cheater Detectの各シグナル精度を継続して検証しています。</p>
            </Disclosure>
          </section>
          <section className="status-project mirrorproxy-status">
            <p className="eyebrow">MIRRORPROXY / BUILDING</p>
            <h2>MirrorProxy</h2>
            <p>macOSを主な導入・起動導線として開発しています。</p>
            <Disclosure defaultOpen title="対応環境と導入">
              <p>Windows/Linuxでも個人での導入は可能です。公式導入動線は未定で、実クライアント互換性と対応範囲を継続して検証しています。</p>
            </Disclosure>
          </section>
        </section>

        <section className="details-list" aria-label="共通の対応状況">
          <Disclosure title="併用について">
            <p>LegitilsとMirrorProxyは併用を推奨していますが、どちらも単体で使えます。</p>
          </Disclosure>
        </section>

        <section className="roadmap" aria-labelledby="roadmap-title">
          <p className="eyebrow">ROADMAP</p>
          <h2 id="roadmap-title">今後のロードマップ</h2>
          <ol>
            <li><span>01</span>実機で検証</li>
            <li><span>02</span>併用を確認</li>
            <li><span>03</span>導入動線を検討</li>
          </ol>
        </section>
      </article>
      <Footer />
    </main>
  );
}
