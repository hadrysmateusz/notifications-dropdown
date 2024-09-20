import styles from "./NotificationsDropdown.module.css";
import { NotificationItem } from "./NotificationItem";
import { useNotificationsStore } from "../notificationsStore";

export const NotificationsDropdown = () => {
  const notifications = useNotificationsStore((state) => state.notifications);
  const markAllAsRead = useNotificationsStore((state) => state.markAllAsRead);

  return (
    <div className={styles.notificationsDropdownOuter}>
      <div className={styles.notificationsDropdownInner}>
        <div className={styles.header}>Notifications</div>
        <div className={styles.actionsBar} onClick={() => markAllAsRead()}>
          <button>Mark all as read</button>
        </div>
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
