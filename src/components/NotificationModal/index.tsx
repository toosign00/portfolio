import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { usePreventScroll } from '@/hooks/usePreventScroll';

interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  type?: 'success' | 'error';
  autoClose?: boolean;
  autoCloseDelay?: number;
}

export const NotificationModal = ({
  isOpen,
  onClose,
  title,
  message,
  type = 'success',
  autoClose = true,
  autoCloseDelay = 4000,
}: NotificationModalProps) => {
  // 모달이 열려있을 때만 배경 스크롤 방지
  usePreventScroll(isOpen);

  useEffect(() => {
    if (isOpen && autoClose) {
      const timer = setTimeout(() => {
        onClose();
      }, autoCloseDelay);

      return () => clearTimeout(timer);
    }
  }, [isOpen, autoClose, autoCloseDelay, onClose]);

  if (!isOpen) return null;

  const getTypeStyles = () => {
    switch (type) {
      case 'success':
        return {
          bgColor: 'bg-green-600',
        };
      case 'error':
        return {
          bgColor: 'bg-red-600',
        };
      default:
        return {
          bgColor: 'bg-green-600',
        };
    }
  };

  const styles = getTypeStyles();

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-ui-background relative mx-4 w-full max-w-md rounded-xl px-6 py-8 shadow-2xl"
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.9 }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center">
          <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
          <p className="mb-6 text-gray-300">{message}</p>
          <button
            onClick={onClose}
            className={`${styles.bgColor} focus-visible:ring-blue cursor-pointer rounded-lg px-6 py-2 font-semibold text-white transition-colors hover:opacity-90 focus:outline-none focus-visible:ring-2`}
          >
            확인
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};
