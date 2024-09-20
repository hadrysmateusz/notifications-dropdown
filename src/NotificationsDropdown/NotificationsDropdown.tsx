import styles from "./NotificationsDropdown.module.css";
import { notifications } from "./notifications";
import { NotificationItem } from "./NotificationItem";

export const NotificationsDropdown = () => {
  return (
    <div className={styles.notificationsDropdownOuter}>
      <div className={styles.notificationsDropdownInner}>
        <div className={styles.header}>Notifications</div>
        <div className={styles.actionsBar}></div>
        {/* TODO: empty state */}
        <ul className={styles.notificationsList}>
          {notifications.map((notification) => (
            <NotificationItem
              notification={notification}
              key={notification.id}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
