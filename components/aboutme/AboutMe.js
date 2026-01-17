import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import styles from "./AboutMe1.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectButton from "../projectbutton/ProjectButton";

const AboutMe = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 15000,
    slidesToShow: 1,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    variableWidth: true,
    arrows: false,
  };

  return (
    <section className={styles.aboutMeSection} id="about-me">
      <div className={styles.content}>
        <Image
          src="/tuong.jpg"
          width={200}
          height={200}
          alt="Tuong Pham"
          className={styles.profilePhoto}
        />
        <div className={styles.aboutText}>
          <h2>About Me</h2>
          <p>
            Pursuing Master in Software Engineering, I am a self-motivated programmer residing in Bay Area, I'm actively seeking opportunities in Software Engineering, Application and Full-stack Development.
          </p>
          <p>
            Outside of coding, building and flying FPV drones are my free time activities. This hobby ignites my love for technologies. Can you imagine piloting something miles away with full awareness?
          </p>
        </div>
      </div>
      <Link href="/contact" passHref>
        <ProjectButton>CONTACT</ProjectButton>
      </Link>
      <div className={styles.carouselContainer}>
        <Slider {...settings}>
          <div>
            <iframe
              src="https://giphy.com/embed/5Oo2KxCjAyIMQnuVWg"
              width="100%"
              height="400"
              frameBorder="0"
              className={styles.carouselItem}
            ></iframe>
          </div>
          <div>
            <iframe
              src="https://giphy.com/embed/D2EY2bvJy9QqLQYUQ1"
              width="100%"
              height="400"
              frameBorder="0"
              className={styles.carouselItem}
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <iframe
              src="https://giphy.com/embed/PbD75aMbbogQH7CaK9"
              width="100%"
              height="400"
              frameBorder="0"
              className={styles.carouselItem}
              allowFullScreen
            ></iframe>
          </div>
          <iframe
            src="https://giphy.com/embed/WJjqVz80d1dgsV87T2"
            width="100%"
            height="400"
            frameBorder="0"
            className={styles.carouselItem}
            allowFullScreen
          ></iframe>
          <div>
            {" "}
            <iframe
              src="https://giphy.com/embed/aRm0Jr3oS4e45sSLgT"
              width="100%"
              height="400"
              frameBorder="0"
              className={styles.carouselItem}
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <iframe
              src="https://giphy.com/embed/Xo01v3YUZYkQ3Z37Je"
              width="100%"
              height="400"
              frameBorder="0"
              className={styles.carouselItem}
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <iframe
              src="https://giphy.com/embed/0pSrz09JDvz8T7ktpP"
              width="100%"
              height="400"
              frameBorder="0"
              className={styles.carouselItem}
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <iframe
              src="https://giphy.com/embed/FltNYYl2dDRCnLaV5u"
              width="100%"
              height="400"
              frameBorder="0"
              className={styles.carouselItem}
              allowFullScreen
            ></iframe>
          </div>
        </Slider>
      </div>

      <div className={styles.divider}></div>
    </section>
  );
};

export default AboutMe;
