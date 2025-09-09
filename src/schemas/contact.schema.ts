import { z } from 'zod';

export const contactFormSchema = z.object({
  from_name: z
    .string()
    .trim()
    .min(2, '이름은 2자 이상이어야 합니다')
    .max(50, '이름은 50자 이하로 입력해주세요'),
  from_email: z
    .string()
    .trim()
    .email('유효한 이메일 주소를 입력해주세요')
    .max(100, '이메일은 100자 이하로 입력해주세요'),
  message: z
    .string()
    .trim()
    .min(1, '메시지를 입력해주세요')
    .max(2000, '메시지는 2000자 이하로 입력해주세요'),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
