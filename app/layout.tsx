import { Providers } from "../components/providers";
import "./global.css";
import "@fontsource/nunito";
import "highlight.js/styles/atom-one-dark.css";

export const metadata = {
  title: "Tony Jara's website",
  description:
    "I'm a fullstack Javascript/Typescript sofware developer. In this website you can find my portfolio and information on how to contact me.",
  themeColor: "#000000",
  metadataBase: new URL("https://tonyjara.com"),
  alternates: {
    canonical: `/`,
  },
  openGraph: {
    images: ["/assets/author/myFace.jpeg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
