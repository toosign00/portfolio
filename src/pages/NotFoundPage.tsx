import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { useLocalizedPath } from '@/hooks/useLocalizedNavigation';

export function NotFoundPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const homePath = useLocalizedPath('/');
  return (
    <div className='flex min-h-screen items-center justify-center bg-black text-white'>
      <div className='p-8 text-center'>
        <h1 className='mb-4 font-bold text-6xl text-red-500'>404</h1>
        <h2 className='mb-4 font-semibold text-2xl'>{t('common.notFoundPage.title')}</h2>
        <p className='mb-8 text-gray-400'>{t('common.notFoundPage.description')}</p>
        <div className='flex justify-center gap-4'>
          <Button onClick={() => navigate(-1)} variant='secondary' size='md'>
            {t('common.previousPage')}
          </Button>
          <Button variant='secondary' size='md' asChild>
            <Link to={homePath}>{t('common.home')}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
