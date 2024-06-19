import styles from "./ProjectButton.module.css";

const ProjectButton = ({ children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <div className={styles.content}>
        <div className={styles.circle}>
          <div className={styles.arrow}>
            <img src="/arrow.svg" alt="Arrow icon" />
          </div>
        </div>
        <div className={styles.text}>
          <h5>{children}</h5>
        </div>
      </div>
    </button>
  );
};

export default ProjectButton;
