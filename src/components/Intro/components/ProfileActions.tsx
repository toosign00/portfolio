import { Button } from '@/components/Button';
import { useFileDownload } from '@/hooks/useFileDownload';

export const ProfileActions = () => {
  const { downloadFile, isDownloading } = useFileDownload();

  const handleDownload = async () => {
    await downloadFile({
      bucket: 'project',
      filePath: 'documents/CV.pdf',
      downloadFileName: '노현수_이력서.pdf',
    });
  };

  return (
    <div className='flex flex-row gap-4 sm:gap-6'>
      <Button
        size='md'
        className='border-none md:rounded-lg md:px-4 md:py-2 md:text-base'
        variant='secondary'
        onClick={handleDownload}
        disabled={isDownloading}
      >
        {isDownloading ? '다운로드 중...' : '이력서 다운로드'}
      </Button>
      <Button
        asChild
        size='md'
        className='border-none md:rounded-lg md:px-4 md:py-2 md:text-base'
        variant='secondary'
      >
        <a href='https://github.com/toosign00' target='_blank' rel='noopener noreferrer'>
          GitHub 방문하기
        </a>
      </Button>
    </div>
  );
};
