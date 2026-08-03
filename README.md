# LMP Production Page

`lmp.snkisk.com` 向けの公式 Development Preview です。Legitils と MirrorProxy を、併用を推奨しつつそれぞれ単体でも使えるツールセットとして紹介します。

このリポジトリは紹介ページだけを含みます。MOD・ローカルプロキシ本体、統合インストーラー、利用者データ、秘密情報は含みません。

## ローカル開発

Node.js 22.13 以降が必要です。

```bash
npm ci
npm run dev
```

Workers向けのビルド確認は次で実行します。

```bash
npm run build
```

## Cloudflare Workers Builds

このリポジトリは `main` をproduction branchとして、Cloudflare Workers Buildsからデプロイします。Worker名は `lmp` です。Cloudflare Dashboardで作成または接続するWorker名も、`wrangler.jsonc` と同じ `lmp` にしてください。

| 設定 | 値 |
| --- | --- |
| Production branch | `main` |
| Build command | `npm run build` |
| Deploy command | `npm run deploy` |
| Preview deploy command | `npx wrangler versions upload --config wrangler.jsonc` |

GitHub接続とcustom domainの割り当てはCloudflare Dashboardで行います。Workerの **Settings > Domains & Routes** から `lmp.snkisk.com` をCustom Domainとして追加してください。`snkisk.com` が同じCloudflareアカウントのzoneであれば、Custom DomainはDNSレコードと証明書をCloudflare側で管理します。

## Public copy boundaries

- Legitils: Cheater DetectとBed Wars QoLのためのMOD。通知は注意を促すシグナルであり、不正を断定しません。
- MirrorProxy: 自分の画面だけにCustom Cape、Custom Bed Wars Star、Custom Hypixel Network Levelを提供します。実際のNick機能ではなく、他者に見える表示は変えません。
- Windows/Linuxでは個人で導入可能ですが、公式導入動線は未定です。

問い合わせは [contact@snkisk.com](mailto:contact@snkisk.com) までお願いします。
