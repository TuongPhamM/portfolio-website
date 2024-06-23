import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./CustomNavbar.module.css";
import Title from "../title/Title";
import Sidebar from "../sidebar/SideBar";

const CustomNavbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={styles.navbar} style={{ opacity: 1 - scrollY / 300 }}>
      <div className={styles.navContainer}>
        <Title />
        {!isSidebarOpen && (
          <div className={styles.navLinks}>
            <Link href="/" passHref>
              <div className={styles.navLink}>
                <div className={styles.linkText}>
                  <span className={styles.defaultText}>HOME</span>
                  <span className={styles.hoverText}>HOME</span>
                </div>
              </div>
            </Link>
            <Link href="/#projects" passHref>
              <div className={styles.navLink}>
                <div className={styles.linkText}>
                  <span className={styles.defaultText}>WORK</span>
                  <span className={styles.hoverText}>WORK</span>
                </div>
              </div>
            </Link>
            <Link href="/contact" passHref>
              <div className={styles.navLink}>
                <div className={styles.linkText}>
                  <span className={styles.defaultText}>CONTACT</span>
                  <span className={styles.hoverText}>CONTACT</span>
                </div>
              </div>
            </Link>
          </div>
        )}
        <div className={styles.hamburger} onClick={toggleSidebar}>
          &#9776;
        </div>
      </div>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </nav>
  );
};

export default CustomNavbar;
