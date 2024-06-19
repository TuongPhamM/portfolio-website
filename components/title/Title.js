import Link from "next/link";
import styles from "./Title1.module.css";

const Title = () => {
  return (
    <Link href="/" className={styles.title}>
      Tuong Pham®
    </Link>
  );
};

export default Title;
