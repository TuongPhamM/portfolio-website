import "../styles/globals.css";
import CustomNavbar from "../components/navbar/CustomNavbar";
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
