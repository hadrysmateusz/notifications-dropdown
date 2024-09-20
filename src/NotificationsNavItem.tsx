import { FiBell } from "react-icons/fi";
import React from "react";
import { CountBadge } from "./CountBadge";
import styles from "./NotificationsNavItem.module.css";

export const NotificationsNavItem = () => {
  return (
    <div className={styles.notificationsNavItem}>
      <div className={styles.bellIcon}>
        <FiBell />
      </div>
      {/*  TODO: real count*/}
      <CountBadge count={3} />
    </div>
  );
};
