import type { TFunction } from 'i18next';
import { z } from 'zod';

export const guestbookFormSchema = (t: TFunction) =>
  z.object({
    name: z
      .string()
      .min(1, t('guestbook.form.validation.name.required'))
      .max(10, t('guestbook.form.validation.name.max')),
    message: z
      .string()
      .min(1, t('guestbook.form.validation.message.required'))
      .max(1000, t('guestbook.form.validation.message.max')),
  });

export type GuestbookFormSchema = z.infer<typeof guestbookFormSchema>;
