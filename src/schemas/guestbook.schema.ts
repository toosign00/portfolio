import { z } from 'zod';

export const guestbookFormSchema = z.object({
  name: z.string().min(1, '이름을 입력해주세요.').max(10, '이름은 10자 이하로 입력해주세요.'),
  message: z
    .string()
    .min(1, '메시지를 입력해주세요.')
    .max(1000, '메시지는 1000자 이하로 입력해주세요.'),
});

export type GuestbookFormSchema = z.infer<typeof guestbookFormSchema>;
