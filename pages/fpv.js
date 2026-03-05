import Link from "next/link";
import Head from "next/head";
import GallerySection from "../components/gallerysection/GallerySection";
import VimeoIntro from "../components/vimeointro/VimeoIntro";

export default function Projects() {
  return (
    <div className="container" style={{ position: "relative", zIndex: 0 }}>
      <Head>
        <title>Tuong Pham FPV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ position: "relative", zIndex: 1 }}>
        <VimeoIntro />
        <GallerySection />
      </main>
      <style jsx>{`
        .container {
          background-color: #0a0a0a;
          color: white;
          min-height: 100vh;

          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
}
