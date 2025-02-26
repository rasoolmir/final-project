import SkillIconsLinkedin from "../../assets/icons/SkillIconsLinkedin";
import LogosGithubIcon from "../../assets/icons/LogosGithubIcon";

import Loading from "../../components/Loading.component";
import styles from "./about-me.module.css";

export default function AboutMeComponent() {
  const loading = false;

  if (loading) {
    return <Loading />;
  }
  return (
    <div className={styles["about-me"]}>
      <div className={styles["about-image"]}>
        <img src="/images/about-image.webp" alt="about Image" />
      </div>
      <h1 className={styles["about-name"]}>رسول میرمجربیان</h1>
      <p className={styles["about-role"]}>توسعه دهنده فرانت وب</p>
      <div className={styles["social-icons"]}>
        <a
          className={styles["social-icon"]}
          href="https://www.linkedin.com/in/rasoolmir"
        >
          <SkillIconsLinkedin />
        </a>
        <a
          className={styles["social-icon"]}
          href="https://github.com/rasoolmir"
        >
          <LogosGithubIcon />
        </a>
      </div>
    </div>
  );
}
