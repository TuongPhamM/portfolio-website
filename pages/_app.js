import "../styles/globals.css";
import CustomNavbar from "../components/navbar/CustomNavbar";
import Intro from "../components/intro/Intro";
import ProjectsSection from "../components/projectsection/ProjectsSection";
import AboutMe from "../components/aboutme/AboutMe";
import FooterSection from "../components/footer/FooterSection";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CustomNavbar />

      <Component {...pageProps} />
      <FooterSection />
    </>
  );
}

export default MyApp;
