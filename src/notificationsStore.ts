import { create } from "zustand";
import {
  Notification,
  notifications,
} from "./NotificationsDropdown/notifications";

export interface NotificationsState {
  notifications: Notification[];
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
}

export const useNotificationsStore = create<NotificationsState>((set) => ({
  notifications: notifications,
  markAsRead: (id: string) =>
    set((state) => {
      const notificationIndex = state.notifications.findIndex(
        (n) => n.id === id,
      );
      if (notificationIndex > -1) {
        const newNotification = structuredClone(
          notifications[notificationIndex],
        ) as Notification;
        newNotification.isUnread = false;
        const newNotifications = [...state.notifications];
        newNotifications[notificationIndex] = newNotification;
        return { notifications: newNotifications };
      }
      return {};
    }),
  markAllAsRead: () => {
    set((state) => {
      if (state.notifications.every((n) => !n.isUnread)) return {};
      console.log("foo");

      const newNotifications = state.notifications.map((n) => {
        const newNotification = structuredClone(n) as Notification;
        newNotification.isUnread = false;
        return newNotification;
      });
      return { notifications: newNotifications };
    });
  },
}));
