import Head from "next/head";
import Intro from "../components/intro/Intro";
import TickerTape from "../components/tickertape/TickerTape";
import ProjectsSection from "../components/projectsection/ProjectsSection";
import AboutMe from "../components/aboutme/AboutMe";

export default function Home() {
  return (
    <div className="container" style={{ position: "relative", zIndex: 0 }}>
      <Head>
        <title>My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ position: "relative", zIndex: 1 }}>
        <Intro />
        <TickerTape />
        <ProjectsSection />
        <AboutMe />
      </main>
    </div>
  );
}
