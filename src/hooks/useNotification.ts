import { useState } from 'react';
import type { NotificationState } from '@/types/notification.types';

export const useNotification = () => {
  const [notification, setNotification] = useState<NotificationState>({
    isOpen: false,
    title: '',
    message: '',
    type: 'success',
  });

  const showNotification = (
    title: string,
    message: string,
    type: NotificationState['type'] = 'success'
  ) => {
    setNotification({
      isOpen: true,
      title,
      message,
      type,
    });
  };

  const hideNotification = () => {
    setNotification((prev) => ({ ...prev, isOpen: false }));
  };

  return {
    notification,
    showNotification,
    hideNotification,
  };
};
