import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./TickerTape.module.css";

const TickerTape = () => {
  const settings = {
    infinite: true,
    speed: 10000,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    variableWidth: true,
    arrows: false,
  };

  const logos = [
    "/logos/Javascript.png",
    "/logos/Typescript.png",
    "/logos/Python.png",
    "/logos/C++.png",
    "/logos/Csharp.png",
    "/logos/HTML.png",
    "/logos/CSS_completed.png",
    "/logos/SASS.png",
    "/logos/Kotlin2.png",
    "/logos/rust2.png",
    "/logos/SQL2.png",
    "/logos/nosql2.png",
    "/logos/React2.png",
    "/logos/DotNet.png",
    "/logos/Next.png",
    "/logos/NodeJS.png",
    "/logos/PlaidAPI.png",
    "/logos/Mongo.png",
    "/logos/Git2.png",
    "/logos/Postman2.png",
    "/logos/S3.png",
    "/logos/Docker2.png",
    "/logos/mocha2.png",
  ];

  return (
    <div className={styles.tickerWrapper}>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className={styles.slide}>
            <img src={logo} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TickerTape;
