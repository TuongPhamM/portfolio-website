import React from "react";
import Spline from "@splinetool/react-spline";
import styles from "./SplineBackground.module.css";

const SplineBackground = () => {
  return (
    <div className={styles.splineContainer}>
      <Spline scene="https://prod.spline.design/odRfDzEJtGEsMBdI/scene.splinecode" />
    </div>
  );
};

export default SplineBackground;
