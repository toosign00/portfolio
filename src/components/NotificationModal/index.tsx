import * as Dialog from '@radix-ui/react-dialog';
import { m } from 'motion/react';
import { useEffect } from 'react';

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
  useEffect(() => {
    if (isOpen && autoClose) {
      const timer = setTimeout(() => {
        onClose();
      }, autoCloseDelay);

      return () => clearTimeout(timer);
    }
  }, [isOpen, autoClose, autoCloseDelay, onClose]);

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
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay asChild>
          <m.div
            className='fixed inset-0 z-50 bg-black/60 backdrop-blur-sm'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        </Dialog.Overlay>
        <Dialog.Content asChild>
          <m.div
            className='-translate-x-1/2 -translate-y-1/2 fixed top-1/2 left-1/2 z-50 w-full max-w-md rounded-xl border border-white/10 bg-ui-background px-6 py-8 shadow-2xl'
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30,
            }}
          >
            <div className='text-center'>
              <Dialog.Title className='mb-3 font-bold text-white text-xl'>{title}</Dialog.Title>
              <Dialog.Description className='mb-6 text-gray-300'>{message}</Dialog.Description>
              <Dialog.Close asChild>
                <button
                  type='button'
                  className={`${styles.bgColor} cursor-pointer rounded-lg px-6 py-2 font-semibold text-white transition-colors hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue`}
                >
                  확인
                </button>
              </Dialog.Close>
            </div>
          </m.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
