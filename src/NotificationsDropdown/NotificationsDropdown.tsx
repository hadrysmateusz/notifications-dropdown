import styles from "./NotificationsDropdown.module.css";

export const NotificationsDropdown = () => {
  return (
    <div className={styles.notificationsDropdownOuter}>
      <div className={styles.notificationsDropdownInner}>
        <div>Notification 1</div>
        <div>Notification 2</div>
        <div>Notification 3</div>
      </div>
    </div>
  );
};
