import type { Metadata } from "next";
import { Footer, Header } from "../components";
import { Disclosure } from "../disclosure";

export const metadata: Metadata = { title: "Legitils" };

export default function LegitilsPage() {
  return (
    <main>
      <Header />
      <article className="detail-page shell">
        <p className="eyebrow">01 / ALPHA</p>
        <h1>Legitils</h1>
        <p className="detail-lead">Legitを貫く。Cheater DetectとBed Wars QoLのためのMOD。</p>
        <a className="button primary" href="https://github.com/Special-Rapid/Legitils" target="_blank" rel="noreferrer">GitHubで見る <span aria-hidden="true">↗</span></a>

        <section className="details-list" aria-label="Legitilsの詳細">
          <Disclosure defaultOpen title="できること">
            <ul>
              <li>不正の可能性に注意を向けるCheater Detect</li>
              <li>Party参加・離脱通知など、Bed Wars向けQoL</li>
              <li>観測結果と設定を端末内に保存</li>
            </ul>
          </Disclosure>
          <Disclosure title="Cheater Detectについて">
            <p>通知は注意を促すシグナルであり、不正を断定するものではありません。</p>
          </Disclosure>
          <Disclosure title="対応状況">
            <p>Minecraft 1.8.9、Lunar Clientを対象に開発しています。詳しい対応範囲は<a href="/status">対応状況</a>をご覧ください。</p>
          </Disclosure>
        </section>
      </article>
      <Footer />
    </main>
  );
}
