import styles from "./NotificationItem.module.css";
import classNames from "classnames";
import { Notification, NotificationTypes } from "./notifications";

export const NotificationItem = ({
  notification,
}: {
  notification: Notification;
}) => {
  const containerClass = classNames({
    [styles.notificationItem]: true,
    [styles.notificationItem_unread]: notification.isUnread,
  });

  let contentBody;
  switch (notification.type) {
    case "FULL_PERMIT_REQUEST":
      contentBody = (
        <>
          <strong>{notification.requestingUserName}</strong> from{" "}
          <strong>{notification.requestingUserCompany}</strong> requested Full
          Permit Pack for their project{" "}
          <strong>{notification.projectName}</strong>
        </>
      );
      break;
    case "NEW_PRODUCT_LAUNCH":
      contentBody = (
        <>
          We have launched a new product:{" "}
          <strong>{notification.productName}</strong>
        </>
      );
      break;
    case "NEW_FEATURE":
      contentBody = (
        <>
          New Design Tool feature: <strong>{notification.featureName}</strong>
        </>
      );
      break;
    default:
      contentBody = <></>;
  }

  return (
    <li className={containerClass}>
      <div className={styles.notificationTypeIcon}></div>
      <div className={styles.contentContainer}>
        <div className={styles.contentBody}>{contentBody}</div>
        <div className={styles.timestamp}>Yesterday</div>
      </div>
      {notification.isUnread && <div className={styles.unreadIndicator}></div>}
    </li>
  );
};
