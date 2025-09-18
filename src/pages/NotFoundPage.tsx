import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/Button';

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className='flex min-h-screen items-center justify-center bg-black text-white'>
      <div className='p-8 text-center'>
        <h1 className='mb-4 font-bold text-6xl text-red-500'>404</h1>
        <h2 className='mb-4 font-semibold text-2xl'>페이지를 찾을 수 없습니다</h2>
        <p className='mb-8 text-gray-400'>
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
        </p>
        <div className='flex justify-center gap-4'>
          <Button onClick={() => navigate(-1)} variant='secondary' size='md'>
            이전 페이지
          </Button>
          <Link
            to='/'
            className='focus-ring relative flex cursor-pointer items-center justify-center overflow-hidden rounded-md border border-white/10 bg-white/5 px-4 py-2 text-center font-normal text-base text-gray backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:text-white'
          >
            홈으로
          </Link>
        </div>
      </div>
    </div>
  );
}
