export const NotificationTypes = {
  FULL_PERMIT_REQUEST: "FULL_PERMIT_REQUEST",
  NEW_PRODUCT_LAUNCH: "NEW_PRODUCT_LAUNCH",
  NEW_FEATURE: "NEW_FEATURE",
} as const;
export type NotificationType =
  (typeof NotificationTypes)[keyof typeof NotificationTypes];

export type Notification = {
  id: string;
  timestamp: number;
  isUnread: boolean;
} & (
  | {
      type: typeof NotificationTypes.FULL_PERMIT_REQUEST;
      requestingUserName: string;
      requestingUserCompany: string;
      projectName: string;
    }
  | {
      type: typeof NotificationTypes.NEW_PRODUCT_LAUNCH;
      productName: string;
    }
  | {
      type: typeof NotificationTypes.NEW_FEATURE;
      featureName: string;
    }
);

// TODO: move to a zustand store
export const notifications: Notification[] = [
  {
    id: "1",
    timestamp: 1726825537313,
    isUnread: true,
    type: "FULL_PERMIT_REQUEST",
    requestingUserName: "John Doe",
    requestingUserCompany: "ACME Corp",
    projectName: "ACME HQ",
  },
  {
    id: "2",
    timestamp: 1726725507313,
    isUnread: false,
    type: "NEW_PRODUCT_LAUNCH",
    productName: "ACME Product",
  },
  {
    id: "3",
    timestamp: 1726825437313,
    isUnread: true,
    type: "NEW_FEATURE",
    featureName: "ACME Feature",
  },
  {
    id: "4",
    timestamp: 1726825507313,
    isUnread: false,
    type: "NEW_PRODUCT_LAUNCH",
    productName: "ACME Product",
  },
  {
    id: "5",
    timestamp: 1726815437313,
    isUnread: true,
    type: "NEW_FEATURE",
    featureName: "ACME Feature",
  },
];
