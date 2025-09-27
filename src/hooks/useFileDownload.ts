import { useState } from 'react';
import { toast } from 'sonner';
import { supabase } from '@/lib/supabase';
import type { UseFileDownloadOptions } from '@/types/fileDownload.types';

export const useFileDownload = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadFile = async ({ bucket, filePath, downloadFileName }: UseFileDownloadOptions) => {
    setIsDownloading(true);

    try {
      // 최소 로딩 시간 보장을 위한 Promise 생성
      const minLoadingTime = new Promise((resolve) => setTimeout(resolve, 500));

      // 실제 다운로드 작업
      const downloadTask = async () => {
        const { data, error } = await supabase.storage.from(bucket).download(filePath);

        if (error) throw error;

        // 다운로드용 링크 생성하고 바로 클릭
        const url = URL.createObjectURL(data);
        const a = document.createElement('a');
        a.href = url;
        a.download = downloadFileName;
        a.click();
        URL.revokeObjectURL(url);
      };

      // TODO: 에러처리 개선 필요(예: 네트워크 오류, 파일 없음 등 세분화 하고 사용자에게 상황별 알림)
      // 두 작업이 모두 완료될 때까지 대기
      await Promise.all([minLoadingTime, downloadTask()]);
    } catch (error) {
      console.error('다운로드 실패:', error);
      toast.error('다운로드 실패', { description: '파일 다운로드 중 오류가 발생했습니다.' });
      throw error;
    } finally {
      setIsDownloading(false);
    }
  };

  return {
    downloadFile,
    isDownloading,
  };
};
