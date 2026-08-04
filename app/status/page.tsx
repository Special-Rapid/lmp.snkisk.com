import type { Metadata } from "next";
import { Footer, Header } from "../components";
import { Disclosure } from "../disclosure";

export const metadata: Metadata = { title: "対応状況" };

type RoadmapStage = {
  title: string;
  state: "complete" | "current" | "upcoming";
  status: "完了" | "現在" | "予定";
};

const legitilsRoadmapStages: RoadmapStage[] = [
  { title: "Lunar Clientとの互換性の確保", state: "complete", status: "完了" },
  { title: "操作Commandの実装", state: "complete", status: "完了" },
  { title: "Bed Wars QoL機能の実装", state: "current", status: "現在" },
  { title: "Mac appの作成", state: "upcoming", status: "予定" },
  { title: "製品レビュー", state: "upcoming", status: "予定" },
  { title: "最終調整", state: "upcoming", status: "予定" },
  { title: "リリース", state: "upcoming", status: "予定" },
  { title: "アップデート配信", state: "upcoming", status: "予定" },
];

const mirrorProxyRoadmapStages: RoadmapStage[] = [
  { title: "プロキシ機能実装", state: "current", status: "現在" },
  { title: "ログイン情報取得（まだできてない）", state: "upcoming", status: "予定" },
  { title: "操作command実装", state: "upcoming", status: "予定" },
  { title: "network level並びにBedwars starの値置き換え実装", state: "upcoming", status: "予定" },
  { title: "cape置き換え実装", state: "upcoming", status: "予定" },
  { title: "Legitils Mac appと統合", state: "upcoming", status: "予定" },
  { title: "製品レビュー", state: "upcoming", status: "予定" },
  { title: "最終調整", state: "upcoming", status: "予定" },
  { title: "リリース", state: "upcoming", status: "予定" },
  { title: "アップデート配信", state: "upcoming", status: "予定" },
];

function ProjectRoadmap({ name, state, stages }: { name: string; state: "ALPHA" | "BUILDING"; stages: RoadmapStage[] }) {
  return (
    <section className="status-project" aria-labelledby={`${name.toLowerCase()}-title`}>
      <p className="eyebrow">{name.toUpperCase()} / {state}</p>
      <h2 id={`${name.toLowerCase()}-title`}>{name}</h2>
      <ol className="project-roadmap" aria-label={`${name}の開発ロードマップ`}>
        {stages.map((stage, index) => (
          <li className={`roadmap-stage ${stage.state}`} key={stage.title}>
            <span className="stage-marker" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <p className="stage-status">{stage.status}</p>
              <h3>{stage.title}</h3>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default function StatusPage() {
  return (
    <main>
      <Header />
      <article className="detail-page shell">
        <p className="eyebrow">STATUS</p>
        <h1>現在の対応状況</h1>
        <p className="detail-lead">完成済みの統合インストーラーではありません。確認できている範囲だけを掲載しています。</p>

        <section className="status-projects" aria-label="プロジェクト別の開発ロードマップ">
          <ProjectRoadmap name="Legitils" state="ALPHA" stages={legitilsRoadmapStages} />
          <ProjectRoadmap name="MirrorProxy" state="BUILDING" stages={mirrorProxyRoadmapStages} />
        </section>

        <section className="details-list" aria-label="共通の対応状況">
          <Disclosure title="併用について">
            <p>LegitilsとMirrorProxyは併用を推奨していますが、どちらも単体で使えます。</p>
          </Disclosure>
        </section>
      </article>
      <Footer />
    </main>
  );
}
