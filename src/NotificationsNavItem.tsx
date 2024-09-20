import { FiBell } from "react-icons/fi";
import React from "react";
import { CountBadge } from "./CountBadge";
import styles from "./NotificationsNavItem.module.css";
import { NotificationsDropdown } from "./NotificationsDropdown/NotificationsDropdown";
import { getUnreadCount, useNotificationsStore } from "./notificationsStore";

export const NotificationsNavItem = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const notifications = useNotificationsStore((state) => state.notifications);
  const unreadCount = getUnreadCount(notifications);

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
        <CountBadge count={unreadCount} />
      </div>

      {isOpen && <NotificationsDropdown />}
    </div>
  );
};
