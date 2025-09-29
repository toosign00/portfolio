import type { TFunction } from 'i18next';
import { z } from 'zod';

export const contactFormSchema = (t: TFunction) =>
  z.object({
    from_name: z
      .string()
      .trim()
      .min(2, t('contact.form.validation.name.min'))
      .max(50, t('contact.form.validation.name.max')),
    from_email: z
      .email(t('contact.form.validation.email.invalid'))
      .max(100, t('contact.form.validation.email.max')),
    message: z
      .string()
      .trim()
      .min(1, t('contact.form.validation.message.min'))
      .max(1000, t('contact.form.validation.message.max')),
  });

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
