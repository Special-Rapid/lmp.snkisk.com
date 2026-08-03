import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lmp.snkisk.com"),
  title: {
    default: "LMP — Legitils + MirrorProxy",
    template: "%s | LMP",
  },
  description:
    "LegitilsとMirrorProxy。Bed Warsのためのローカルツールセット。",
  icons: {
    icon: "https://images.snkisk.com/lmp.snkisk.com/images/85b94573-797d-472c-b8c3-e8acde115ad4.svg",
    shortcut: "https://images.snkisk.com/lmp.snkisk.com/images/85b94573-797d-472c-b8c3-e8acde115ad4.svg",
  },
  openGraph: {
    title: "LMP — Legitils + MirrorProxy",
    description: "Legitを貫く。Bed Warsをもっと見やすく、もっと自分らしく。",
    type: "website",
    images: [{ url: "https://images.snkisk.com/lmp.snkisk.com/images/fb02ffbc-41f8-4a01-bc65-27d7765983f8.png", width: 1200, height: 630, alt: "LMP — Legitils + MirrorProxy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "LMP — Legitils + MirrorProxy",
    description: "Legitを貫く。Bed Warsをもっと見やすく、もっと自分らしく。",
    images: ["https://images.snkisk.com/lmp.snkisk.com/images/fb02ffbc-41f8-4a01-bc65-27d7765983f8.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
