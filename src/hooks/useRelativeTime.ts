import { useTranslation } from 'react-i18next';

export const useRelativeTime = () => {
  const { t } = useTranslation();

  return (dateString: string): string => {
    try {
      const date = new Date(dateString);
      const now = new Date();
      const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));

      if (diffInMinutes < 1) return t('common.time.justNow');
      if (diffInMinutes < 60) return t('common.time.minutesAgo', { count: diffInMinutes });

      const diffInHours = Math.floor(diffInMinutes / 60);
      if (diffInHours < 24) return t('common.time.hoursAgo', { count: diffInHours });

      const diffInDays = Math.floor(diffInHours / 24);
      if (diffInDays < 7) return t('common.time.daysAgo', { count: diffInDays });

      const diffInWeeks = Math.floor(diffInDays / 7);
      if (diffInWeeks < 4) return t('common.time.weeksAgo', { count: diffInWeeks });

      const diffInMonths = Math.floor(diffInDays / 30);
      if (diffInMonths < 12) return t('common.time.monthsAgo', { count: diffInMonths });

      const diffInYears = Math.floor(diffInDays / 365);
      return t('common.time.yearsAgo', { count: diffInYears });
    } catch {
      return t('common.time.unknown');
    }
  };
};
