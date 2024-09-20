import styles from "./NotificationItem.module.css";
import classNames from "classnames";
import { Notification, NotificationTypes } from "./notifications";
import { AiOutlineFire } from "react-icons/ai";
import { FiMessageCircle } from "react-icons/fi";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { formatDistanceToNow } from "date-fns";
import { useNotificationsStore } from "../notificationsStore";

export const NotificationItem = ({
  notification,
}: {
  notification: Notification;
}) => {
  const markAsRead = useNotificationsStore((state) => state.markAsRead);

  const containerClass = classNames({
    [styles.notificationItem]: true,
    [styles.notificationItem_unread]: notification.isUnread,
  });

  const typeIconClass = classNames({
    [styles.notificationTypeIcon]: true,
    [styles.notificationTypeIcon_fullPermitRequest]:
      notification.type === NotificationTypes.FULL_PERMIT_REQUEST,
    [styles.notificationTypeIcon_newProductLaunch]:
      notification.type === NotificationTypes.NEW_PRODUCT_LAUNCH,
    [styles.notificationTypeIcon_newFeature]:
      notification.type === NotificationTypes.NEW_FEATURE,
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

  let typeIcon;
  switch (notification.type) {
    case "FULL_PERMIT_REQUEST":
      typeIcon = <FiMessageCircle />;
      break;
    case "NEW_PRODUCT_LAUNCH":
      typeIcon = <HiOutlineRocketLaunch />;
      break;
    case "NEW_FEATURE":
      typeIcon = <AiOutlineFire />;
      break;
    default:
      typeIcon = <></>;
  }

  return (
    <li className={containerClass}>
      <div className={typeIconClass}>{typeIcon}</div>
      <div className={styles.contentContainer}>
        <div className={styles.contentBody}>{contentBody}</div>
        <div className={styles.timestamp}>
          {formatDistanceToNow(notification.timestamp, { addSuffix: true })}
        </div>
      </div>
      {notification.isUnread && (
        <div
          className={styles.unreadIndicatorClickWrapper}
          onClick={() => markAsRead(notification.id)}
        >
          <div className={styles.unreadIndicator} />
        </div>
      )}
    </li>
  );
};
