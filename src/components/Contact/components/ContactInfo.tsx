import { HiOutlinePhone } from 'react-icons/hi';
import { MdOutlineEmail } from 'react-icons/md';
import type { ContactInfoData } from '@/types/contact.type';

interface ContactInfoProps {
  info: ContactInfoData;
}

export const ContactInfo = ({ info }: ContactInfoProps) => {
  return (
    <div className="mb-12 flex flex-col items-center gap-2 text-center text-white">
      <div className="flex w-[15.625rem] items-center justify-center gap-2">
        <HiOutlinePhone className="text-blue text-xl" />
        <span>{info.phone}</span>
      </div>
      <div className="flex items-center justify-center gap-2">
        <MdOutlineEmail className="text-blue text-xl" />
        <span>{info.email}</span>
      </div>
    </div>
  );
};
