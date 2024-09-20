import styles from "./NotificationsDropdown.module.css";
import { NotificationItem } from "./NotificationItem";
import { getUnreadCount, useNotificationsStore } from "../notificationsStore";
import { CountBadge } from "../CountBadge";
import classNames from "classnames";

export const NotificationsDropdown = () => {
  const notifications = useNotificationsStore((state) => state.notifications);
  const markAllAsRead = useNotificationsStore((state) => state.markAllAsRead);
  const unreadCount = getUnreadCount(notifications);

  const showOnlyUnread = useNotificationsStore((state) => state.showOnlyUnread);
  const setShowOnlyUnread = useNotificationsStore(
    (state) => state.setShowOnlyUnread,
  );

  const filteredNotifications = showOnlyUnread
    ? notifications.filter((n) => n.isUnread)
    : notifications;

  return (
    <div className={styles.notificationsDropdownOuter}>
      <div className={styles.notificationsDropdownInner}>
        <div className={styles.header}>
          Notifications
          <CountBadge count={unreadCount} />
        </div>
        <div className={styles.actionsBar}>
          <button
            className={classNames({
              [styles.button]: true,
              [styles.button_primary]: !showOnlyUnread,
              [styles.button_secondary]: showOnlyUnread,
            })}
            onClick={() => setShowOnlyUnread(false)}
          >
            All Notifications
          </button>
          <button
            className={classNames({
              [styles.button]: true,
              [styles.button_primary]: showOnlyUnread,
              [styles.button_secondary]: !showOnlyUnread,
            })}
            onClick={() => setShowOnlyUnread(true)}
          >
            Unread Notifications
          </button>
          <button
            className={styles.button + " " + styles.button_text}
            onClick={() => markAllAsRead()}
          >
            Mark all as read
          </button>
        </div>
        {filteredNotifications.length > 0 ? (
          <ul className={styles.notificationsList}>
            {filteredNotifications.map((notification) => (
              <NotificationItem
                notification={notification}
                key={notification.id}
              />
            ))}
          </ul>
        ) : (
          <div className={styles.emptyState}>No notifications</div>
        )}
      </div>
    </div>
  );
};
