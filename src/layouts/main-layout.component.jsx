import { Outlet } from "react-router-dom";
import HeaderComponent from "../components/header/header.component";
import SidebarComponent from "../components/sidebar/sidebar.component";
import FooterComponent from "../components/footer/footer.component";

import styles from "./main-layout.module.css";

export default function MainLayoutComponent() {
  return (
    <div className={styles["main-layout"]}>
      <HeaderComponent />
      <div className={styles.main}>
        <SidebarComponent />
        <main className={styles.content}>
          <div className={styles["container-fluid p-0"]}>
            <Outlet />
          </div>
        </main>
      </div>
      <FooterComponent />
    </div>
  );
}
