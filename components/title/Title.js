import Link from "next/link";
import styles from "./Title.module.css";

const Title = () => {
  return (
    <Link href="/" className={styles.title}>
      Tuong Pham®
    </Link>
  );
};

export default Title;
