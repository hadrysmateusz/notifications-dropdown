import { FiBell } from "react-icons/fi";
import React from "react";
import { CountBadge } from "./CountBadge";
import styles from "./NotificationsNavItem.module.css";
import { NotificationsDropdown } from "./NotificationsDropdown/NotificationsDropdown";

export const NotificationsNavItem = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  // TODO: close dropdown when clicking outside
  return (
    <div className={styles.notificationsNavItem}>
      <div
        className={styles.notificationsDropdownTrigger}
        onClick={() => setIsOpen((value) => !value)}
      >
        <div className={styles.bellIcon}>
          <FiBell />
        </div>
        {/*  TODO: real count*/}
        <CountBadge count={3} />
      </div>

      {isOpen && <NotificationsDropdown />}
    </div>
  );
};
