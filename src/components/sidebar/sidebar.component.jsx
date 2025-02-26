import { NavLink } from "react-router-dom";

import styles from "./sidebar.module.css";

const links = [
  { path: "/home", label: "خانه" },
  { path: "/about-me", label: "درباره من" },
  { path: "/todos", label: "تودو لیست" },
  { path: "/blog", label: "بلاگ" },
  { path: "/shop", label: "فروشگاه" },
];

export default function SidebarComponent() {
  return (
    <div className={styles.sidebar}>
      <ul>
        {links.map(({ path, label }) => (
          <li key={path}>
            <NavLink to={path}>{label}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
