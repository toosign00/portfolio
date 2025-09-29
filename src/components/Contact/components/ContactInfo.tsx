import { HiOutlinePhone } from 'react-icons/hi';
import { MdOutlineEmail } from 'react-icons/md';

export const ContactInfo = () => {
  return (
    <div className='mb-12 flex flex-col items-center gap-2 text-center text-white'>
      <div className='flex w-[15.625rem] items-center justify-center gap-2'>
        <HiOutlinePhone className='text-blue text-xl' />
        <span>+82 10-8514-8477</span>
      </div>
      <div className='flex items-center justify-center gap-2'>
        <MdOutlineEmail className='text-blue text-xl' />
        <span>kevinsoo1014@gmail.com</span>
      </div>
    </div>
  );
};
