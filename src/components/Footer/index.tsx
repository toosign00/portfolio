import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiVelog } from 'react-icons/si';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='w-full border-gray-800 border-t bg-black px-4 py-12'>
      <div className='mx-auto max-w-7xl'>
        <div className='flex flex-col items-center justify-between gap-8 md:flex-row'>
          <div className='text-center md:text-left'>
            <h3 className='font-bold text-white text-xl'>Hyunsoo Roh</h3>
            <p className='mt-2 text-gray-400'>Frontend Developer</p>
          </div>

          <div className='flex gap-6'>
            <a
              href='https://github.com/toosign00'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='GitHub 프로필로 이동'
              className='text-gray-400 transition-colors hover:text-blue'
            >
              <FaGithub size={24} />
            </a>
            <a
              href='https://www.linkedin.com/in/hyunsoo-roh-97871431b'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn 프로필로 이동'
              className='text-gray-400 transition-colors hover:text-blue'
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href='https://velog.io/@toosign00'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Velog 블로그로 이동'
              className='text-gray-400 transition-colors hover:text-blue'
            >
              <SiVelog size={24} />
            </a>
          </div>
        </div>

        <div className='mt-8 border-gray text-center'>
          <p className='text-gray-400 text-sm'>© {currentYear} Hyunsoo Roh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
