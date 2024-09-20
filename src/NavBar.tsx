import styles from "./NavBar.module.css";
import { NotificationsNavItem } from "./NotificationsNavItem";

export const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <NotificationsNavItem />
    </div>
  );
};
