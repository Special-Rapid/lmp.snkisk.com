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

        <section className="details-list" aria-label="対応状況の詳細">
          <Disclosure defaultOpen title="対象環境">
            <dl className="status-grid">
              <div><dt>GAME</dt><dd>Minecraft 1.8.9</dd></div>
              <div><dt>CLIENT</dt><dd>Lunar Clientを対象に開発</dd></div>
              <div><dt>macOS</dt><dd>主な導入・起動導線として開発中</dd></div>
              <div><dt>WINDOWS / LINUX</dt><dd>個人での導入は可能。公式導線は未定</dd></div>
            </dl>
          </Disclosure>
          <Disclosure title="併用について">
            <p>LegitilsとMirrorProxyは併用を推奨していますが、どちらも単体で使えます。</p>
          </Disclosure>
          <Disclosure title="開発中の範囲">
            <p>Legitilsの実機互換性・各シグナルの精度、MirrorProxyの実クライアント互換性と対応範囲を継続して検証しています。</p>
          </Disclosure>
        </section>
      </article>
      <Footer />
    </main>
  );
}
