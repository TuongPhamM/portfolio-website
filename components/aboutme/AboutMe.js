import React from "react";
import Slider from "react-slick";
import styles from "./AboutMe.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        <img src="tuong.jpg" alt="Your Name" className={styles.profilePhoto} />
        <div className={styles.aboutText}>
          <h2>About Me</h2>
          <p>
            Recently graduated from North Seattle College with a Bachelor's in
            Application Development, I am a self-motivated programmer who treats
            coding not just as a hobby but as a journey to continually better
            myself. Residing in Seattle, I'm actively seeking opportunities in
            Software Engineering, Software/Application Development, and Full
            Stack Development, with an eagerness to start in Summer 2024.
          </p>
          <p>
            For me, coding is fascinating—computers, with their unwavering
            accuracy, remind me that the solution is always within reach,
            perhaps just a moment of patience away. This mindset has not only
            fueled my academic pursuits but also my personal projects.
          </p>
          <p>
            Outside of coding, I've found a similar passion in building and
            flying FPV drones for the past four years. This hobby has been
            instrumental in transforming my coding skills into a true passion,
            offering a unique blend of technical challenge and creative
            expression.
          </p>
        </div>
      </div>
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
